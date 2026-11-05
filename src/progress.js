// Persistent player progress for CSS Quest.
//
// Everything is stored in localStorage under a versioned key. The module
// keeps a single object in memory and writes it after every change, so the
// rest of the game never has to deal with storage directly.

import { STAR_XP } from './quest-map.js'

const STORAGE_KEY = 'cssquest-progress-v1'

function createDefaultProgress() {
  return {
    version: 1,
    levels: {},
    lastLevelId: 1,
    soundOn: false,
    achievements: [],
    tagsOpened: [],
    languagesTried: [],
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
    daily: {
      ...base.daily,
      ...(saved.daily && typeof saved.daily === 'object' ? saved.daily : {})
    }
  }
}

export function loadProgress() {
  if (progress) return progress

  try {
    progress = normalize(safeParse(localStorage.getItem(STORAGE_KEY)))
  } catch {
    progress = createDefaultProgress()
  }
  return progress
}

export function saveProgress() {
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
    improved,
    bestStars,
    earnedStars: stars,
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
