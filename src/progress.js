// Persistent player progress for CSS Quest.
//
// Everything is stored in localStorage under a versioned key. The module
// keeps a single object in memory and writes it after every change, so the
// rest of the game never has to deal with storage directly.

import { STAR_XP, MAX_STARS } from './quest-map.js'

const STORAGE_KEY = 'cssquest-progress-v1'

function createDefaultProgress() {
  return {
    version: 1,
    levels: {},
    lastLevelId: 1,
    soundOn: false,
    mode: 'normal',
    effectsOn: true,
    showTimer: true,
    coinStars: 0,
    coinStreak: 0,
    coinBestStreak: 0,
    logoChoice: 'main',
    achievements: [],
    tagsOpened: [],
    languagesTried: [],
    skeletonSeen: false,
    daily: {
      date: null,
      levelId: null,
      done: false,
      streak: 0,
      lastDoneDate: null
    }
  }
}

let progress = null

function safeParse(text) {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

function safeCount(value) {
  const number = Number(value)
  return Number.isFinite(number) ? Math.max(0, Math.floor(number)) : 0
}

// Merges an older or partial save with the current defaults, so a missing
// field never crashes the game.
function normalize(saved) {
  const base = createDefaultProgress()
  if (!saved || typeof saved !== 'object') return base

  return {
    ...base,
    ...saved,
    levels: saved.levels && typeof saved.levels === 'object' ? saved.levels : {},
    achievements: Array.isArray(saved.achievements) ? saved.achievements : [],
    tagsOpened: Array.isArray(saved.tagsOpened) ? saved.tagsOpened : [],
    languagesTried: Array.isArray(saved.languagesTried) ? saved.languagesTried : [],
    skeletonSeen: Boolean(saved.skeletonSeen),
    mode: ['normal', 'hard', 'hardcore'].includes(saved.mode) ? saved.mode : 'normal',
    effectsOn: saved.effectsOn !== false,
    showTimer: saved.showTimer !== false,
    coinStars: safeCount(saved.coinStars),
    coinStreak: safeCount(saved.coinStreak),
    coinBestStreak: Math.max(safeCount(saved.coinBestStreak), safeCount(saved.coinStreak)),
    logoChoice: saved.logoChoice === 'alt' && Array.isArray(saved.achievements) && saved.achievements.includes('coinThousandStars')
      ? 'alt'
      : 'main',
    daily: {
      ...base.daily,
      ...(saved.daily && typeof saved.daily === 'object' ? saved.daily : {})
    }
  }
}

function loadProgress() {
  if (progress) return progress

  try {
    progress = normalize(safeParse(localStorage.getItem(STORAGE_KEY)))
  } catch {
    progress = createDefaultProgress()
  }
  return progress
}

function saveProgress() {
  if (!progress) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // Private mode or a full storage should never stop the game.
  }
}

export function getProgress() {
  return loadProgress()
}

export function resetProgress() {
  progress = createDefaultProgress()
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Ignore storage errors.
  }
  saveProgress()
  return progress
}

function emptyLevel() {
  return {
    solved: false,
    bestStars: 0,
    bestTimeMs: 0,
    solvedAt: null,
    checks: 0
  }
}

export function getLevelProgress(levelId) {
  const state = getProgress()
  return { ...emptyLevel(), ...(state.levels[levelId] || {}) }
}

export function isLevelSolved(levelId) {
  return getLevelProgress(levelId).solved
}

// Levels unlock in order: the first one is always open and every other
// level needs the previous one solved.
export function isLevelUnlocked(levelId) {
  if (levelId <= 1) return true
  return isLevelSolved(levelId - 1)
}

export function getFirstUnsolvedLevelId(totalLevels) {
  for (let id = 1; id <= totalLevels; id++) {
    if (!isLevelSolved(id)) return id
  }
  return totalLevels
}

export function getSolvedCount() {
  return Object.values(getProgress().levels).filter(level => level.solved).length
}

export function getTotalStars() {
  return Object.values(getProgress().levels).reduce(
    (total, level) => total + (level.bestStars || 0),
    0
  )
}

export function getTotalXp() {
  return getTotalStars() * STAR_XP
}

// Hidden dev shortcut: fills every level with the maximum star score and
// tops up the separate coin balance used by the coin flip.
export function grantAllStars(coinAmount = 1000) {
  const state = getProgress()
  const levelCount = Math.floor(MAX_STARS / 3)

  for (let id = 1; id <= levelCount; id++) {
    const previous = getLevelProgress(id)
    state.levels[id] = {
      solved: true,
      bestStars: 3,
      bestTimeMs: previous.bestTimeMs > 0 ? previous.bestTimeMs : 60000,
      solvedAt: previous.solvedAt || new Date().toISOString(),
      checks: previous.checks || 1
    }
  }

  state.coinStars = Math.max(safeCount(state.coinStars), safeCount(coinAmount))
  saveProgress()
}

export function setLastLevelId(levelId) {
  const state = getProgress()
  state.lastLevelId = levelId
  saveProgress()
}

export function getLastLevelId() {
  return getProgress().lastLevelId || 1
}

// Stores a solved level. Only a better star result changes the best score,
// so replaying cannot lower a previous record.
export function recordLevelResult(levelId, result) {
  const state = getProgress()
  const previous = getLevelProgress(levelId)
  const stars = Math.max(0, Math.min(3, result.stars || 0))
  const bestStars = Math.max(previous.bestStars, stars)
  const firstSolve = !previous.solved
  const improved = stars > previous.bestStars

  const bestTimeMs = result.timeMs > 0
    ? (previous.bestTimeMs > 0 ? Math.min(previous.bestTimeMs, result.timeMs) : result.timeMs)
    : previous.bestTimeMs

  const coinGained = improved ? bestStars - previous.bestStars : 0
  if (coinGained > 0) state.coinStars = safeCount(state.coinStars) + coinGained

  state.levels[levelId] = {
    solved: true,
    bestStars,
    bestTimeMs,
    solvedAt: previous.solvedAt || new Date().toISOString(),
    checks: (previous.checks || 0) + 1
  }
  saveProgress()

  return {
    firstSolve,
    bestStars,
    coinGained,
    xpGained: (bestStars - previous.bestStars) * STAR_XP
  }
}

export function recordBadCheck(levelId) {
  const state = getProgress()
  const previous = getLevelProgress(levelId)
  state.levels[levelId] = {
    ...previous,
    checks: (previous.checks || 0) + 1
  }
  saveProgress()
}

export function setSoundOn(value) {
  const state = getProgress()
  state.soundOn = Boolean(value)
  saveProgress()
}

export function getSoundOn() {
  return Boolean(getProgress().soundOn)
}

export function setMode(value) {
  const state = getProgress()
  state.mode = ['normal', 'hard', 'hardcore'].includes(value) ? value : 'normal'
  saveProgress()
}

export function getMode() {
  return getProgress().mode
}

export function setEffectsOn(value) {
  const state = getProgress()
  state.effectsOn = Boolean(value)
  saveProgress()
}

export function getEffectsOn() {
  return getProgress().effectsOn !== false
}

export function setShowTimer(value) {
  const state = getProgress()
  state.showTimer = Boolean(value)
  saveProgress()
}

export function getShowTimer() {
  return getProgress().showTimer !== false
}

export function getCoinStars() {
  return safeCount(getProgress().coinStars)
}

export function spendCoinStars(amount) {
  const state = getProgress()
  const cost = safeCount(amount)
  if (cost < 1 || cost > safeCount(state.coinStars)) return false
  state.coinStars = safeCount(state.coinStars) - cost
  saveProgress()
  return true
}

export function getCoinStreak() {
  return safeCount(getProgress().coinStreak)
}

export function getCoinBestStreak() {
  return safeCount(getProgress().coinBestStreak)
}

export function getCoinMultiplier() {
  return Math.min(1 + getCoinStreak(), 5)
}

// Called after the bet has been removed. A win pays bet x multiplier and
// grows the streak; a loss only resets the streak.
export function recordCoinFlipResult(won, payout) {
  const state = getProgress()
  if (won) {
    state.coinStreak = safeCount(state.coinStreak) + 1
    state.coinBestStreak = Math.max(safeCount(state.coinBestStreak), state.coinStreak)
    state.coinStars = safeCount(state.coinStars) + safeCount(payout)
  } else {
    state.coinStreak = 0
  }
  saveProgress()
}

export function getLogoChoice() {
  const state = getProgress()
  return state.logoChoice === 'alt' && state.achievements.includes('coinThousandStars') ? 'alt' : 'main'
}

export function setLogoChoice(value) {
  const state = getProgress()
  state.logoChoice = value === 'alt' && state.achievements.includes('coinThousandStars') ? 'alt' : 'main'
  saveProgress()
}

export function recordTagOpened(tag) {
  const state = getProgress()
  if (!state.tagsOpened.includes(tag)) {
    state.tagsOpened.push(tag)
    saveProgress()
  }
}

export function recordLanguageTried(code) {
  const state = getProgress()
  if (!state.languagesTried.includes(code)) {
    state.languagesTried.push(code)
    saveProgress()
  }
}

// Remembers that the running skeleton was actually seen on screen. The
// return value tells the caller if this is the first sighting, so the secret
// achievement is only checked once.
export function recordSkeletonSeen() {
  const state = getProgress()
  if (state.skeletonSeen) return false
  state.skeletonSeen = true
  saveProgress()
  return true
}

export function getUnlockedAchievements() {
  return getProgress().achievements
}

export function unlockAchievements(ids) {
  if (!ids.length) return []
  const state = getProgress()
  const newIds = ids.filter(id => !state.achievements.includes(id))
  if (newIds.length) {
    state.achievements.push(...newIds)
    saveProgress()
  }
  return newIds
}

export function hasAchievement(id) {
  return getProgress().achievements.includes(id)
}

// Local date helpers. Using the local date (not UTC) matches the calendar
// the student sees on the computer.
export function getDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function getYesterdayKey() {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  return getDateKey(date)
}

// Prepares today's daily challenge. Picking the level is done by the caller;
// here we only reset the "done" flag when the day changes.
export function ensureDailyChallenge(levelId) {
  const state = getProgress()
  const today = getDateKey()

  if (state.daily.date !== today) {
    state.daily = {
      ...state.daily,
      date: today,
      levelId,
      done: false
    }
    saveProgress()
  } else if (!state.daily.levelId) {
    state.daily.levelId = levelId
    saveProgress()
  }

  return state.daily
}

export function getDailyChallenge() {
  return getProgress().daily
}

export function completeDailyChallenge(levelId) {
  const state = getProgress()
  const today = getDateKey()
  const daily = state.daily

  if (daily.lastDoneDate === today) return false

  const streak = daily.lastDoneDate === getYesterdayKey()
    ? (daily.streak || 0) + 1
    : 1

  state.daily = {
    date: today,
    levelId,
    done: true,
    streak,
    lastDoneDate: today
  }
  saveProgress()
  return true
}
