import levels, { cssTagsGuide } from './levels.js'
import { updatePreview, updateTarget, isIframeReady } from './preview.js'
import { visuallyMatchesTarget } from './visual-check.js'
import {
  languages,
  LANGUAGE_KEY,
  getLanguage,
  setLanguage,
  getLanguageName,
  getLevelText,
  getTagText,
  t
} from './i18n.js'
import {
  worlds,
  isBossLevel,
  getWorldForLevel,
  getWorldNameKey,
  getRank,
  MAX_XP,
  MAX_STARS
} from './quest-map.js'
import {
  getProgress,
  resetProgress,
  getLevelProgress,
  isLevelSolved,
  isLevelUnlocked,
  getFirstUnsolvedLevelId,
  getSolvedCount,
  getTotalStars,
  getTotalXp,
  getLastLevelId,
  setLastLevelId,
  recordLevelResult,
  recordBadCheck,
  setSoundOn,
  getSoundOn,
  recordTagOpened,
  recordLanguageTried,
  recordSkeletonSeen,
  unlockAchievements,
  hasAchievement,
  getUnlockedAchievements,
  getDateKey,
  ensureDailyChallenge,
  getDailyChallenge,
  completeDailyChallenge
} from './progress.js'
import { achievements, getAchievementText } from './achievements.js'
import {
  setSoundEnabled,
  isSoundEnabled,
  playSuccess,
  playError,
  playStar,
  playAchievement,
  playRankUp,
  playClick
} from './sound.js'

const editorInput = document.getElementById('editorInput')
const editorContainer = document.getElementById('editorContainer')
const lineNumbers = document.getElementById('lineNumbers')
const previewFrame = document.getElementById('previewFrame')
const targetFrame = document.getElementById('targetFrame')
const targetWrapper = document.getElementById('targetWrapper')
const levelBadge = document.getElementById('levelBadge')
const worldLabel = document.getElementById('worldLabel')
const bossBadge = document.getElementById('bossBadge')
const challengeTitle = document.getElementById('challengeTitle')
const challengeDescription = document.getElementById('challengeDescription')
const hintText = document.getElementById('hintText')
const hintBox = document.getElementById('hintBox')
const resultBanner = document.getElementById('resultBanner')
const resultIcon = document.getElementById('resultIcon')
const resultText = document.getElementById('resultText')
const resultStars = document.getElementById('resultStars')
const resultMeta = document.getElementById('resultMeta')
const resultActions = document.getElementById('resultActions')
const explanationPanel = document.getElementById('explanationPanel')
const explanationBody = document.getElementById('explanationBody')
const btnCollapseExplanation = document.getElementById('btnCollapseExplanation')
const btnCloseExplanation = document.getElementById('btnCloseExplanation')
const previewStatus = document.getElementById('previewStatus')
const btnCheck = document.getElementById('btnCheck')
const btnReset = document.getElementById('btnReset')
const btnHint = document.getElementById('btnHint')
const btnTags = document.getElementById('btnTags')
const tagsModal = document.getElementById('tagsModal')
const tagsBody = document.getElementById('tagsBody')
const tagsClose = document.getElementById('tagsClose')
const btnLanguage = document.getElementById('btnLanguage')
const languageMenu = document.getElementById('languageMenu')
const btnMap = document.getElementById('btnMap')
const btnSound = document.getElementById('btnSound')
const rankName = document.getElementById('rankName')
const xpText = document.getElementById('xpText')
const xpFill = document.getElementById('xpFill')
const starsTotal = document.getElementById('starsTotal')
const missionStrip = document.getElementById('missionStrip')
const missionSolveLabel = document.getElementById('missionSolveLabel')
const missionNoHintLabel = document.getElementById('missionNoHintLabel')
const missionFirstTryLabel = document.getElementById('missionFirstTryLabel')
const missionTimer = document.getElementById('missionTimer')
const missionStars = [...document.querySelectorAll('.mission-star')]
const questModal = document.getElementById('questModal')
const questBody = document.getElementById('questBody')
const questClose = document.getElementById('questClose')
const questTabMap = document.getElementById('questTabMap')
const questTabAchievements = document.getElementById('questTabAchievements')
const btnResetProgress = document.getElementById('btnResetProgress')
const bossOverlay = document.getElementById('bossOverlay')
const bossTitle = document.getElementById('bossTitle')
const bossText = document.getElementById('bossText')
const bossStart = document.getElementById('bossStart')
const finalOverlay = document.getElementById('finalOverlay')
const finalStats = document.getElementById('finalStats')
const btnPlayAgain = document.getElementById('btnPlayAgain')
const btnReviewLevels = document.getElementById('btnReviewLevels')
const skeletonRunner = document.getElementById('skeletonRunner')
const toastStack = document.getElementById('toastStack')
const devModal = document.getElementById('devModal')
const devClose = document.getElementById('devClose')
const devLogin = document.getElementById('devLogin')
const devPassword = document.getElementById('devPassword')
const devError = document.getElementById('devError')
const devPanel = document.getElementById('devPanel')
const devLevel = document.getElementById('devLevel')
const devSolutions = document.getElementById('devSolutions')
const devAnswer = document.getElementById('devAnswer')
const devFill = document.getElementById('devFill')

const DEV_PASSWORD_HASH = 0xd7460570
const SKELETON_CHANCE = 0.000001
const SKELETON_DURATION_MS = 750

let currentLevelIndex = 0
let currentCSS = ''
let explanationCollapsed = false
let lastResult = null
let previewIsLive = false
let questTab = 'map'
let isDailyMode = false
let dailyLevelId = null
let finalShown = false
let timerId = null
let previewStatusTimeout = null
let skeletonTimeout = null
let devUnlocked = false
let devSolutionIndex = 0
let run = createRun()

const seenBossIntros = new Set()
const seenWorldClears = new Set()

function createRun() {
  return {
    hintsUsed: 0,
    wrongChecks: 0,
    startedAt: null,
    elapsedMs: 0,
    hintRevealed: false
  }
}

function init() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY)
  if (savedLanguage) setLanguage(savedLanguage)
  recordLanguageTried(getLanguage())

  setSoundEnabled(getSoundOn())
  setupEventListeners()
  loadLevelById(getResumeLevelId())
  updateSoundButton()
  updateHeader()
  applyLanguage(false)
}

function getResumeLevelId() {
  const firstUnsolved = getFirstUnsolvedLevelId(levels.length)
  if (levels.some(level => level.id === firstUnsolved) && isLevelUnlocked(firstUnsolved)) {
    return firstUnsolved
  }

  const lastId = getLastLevelId()
  if (levels.some(level => level.id === lastId) && isLevelUnlocked(lastId)) {
    return lastId
  }

  for (let i = levels.length - 1; i >= 0; i--) {
    if (isLevelUnlocked(levels[i].id)) return levels[i].id
  }
  return levels[0].id
}

function loadLevelById(levelId, options = {}) {
  const index = levels.findIndex(level => level.id === levelId)
  if (index < 0) return
  loadLevel(index, options)
}

function loadLevel(index, options = {}) {
  const level = levels[index]
  if (!level) return

  if (!isLevelUnlocked(level.id)) {
    showToast(t('lockedLevel'), t('lockedLevelToast', { n: level.id - 1 }), 'error')
    return
  }

  currentLevelIndex = index
  isDailyMode = Boolean(options.daily)
  dailyLevelId = isDailyMode ? level.id : null
  explanationCollapsed = false
  lastResult = null
  resetRun()

  const text = getLevelText(level)
  currentCSS = text.starterCSS
  editorInput.value = text.starterCSS
  updateLineNumbers()
  setLastLevelId(level.id)

  renderPreview(text.starterCSS)
  updateTarget(targetFrame, level.html, text.solutions[0].css, level.themeCSS)
  targetWrapper.classList.add('visible')

  hintText.textContent = text.hint
  hintBox.classList.remove('visible')
  closeTagsGuide()
  hideResult()
  refreshLevelText()
  updateHintButton()
  updateHeader()
  renderMissionStrip()
  editorInput.focus()

  maybeShowBossIntro(level, text)
  maybeRunSkeleton()
}

function setupEventListeners() {
  editorInput.addEventListener('input', onEditorInput)
  editorInput.addEventListener('keydown', onEditorKeydown)
  editorInput.addEventListener('scroll', syncScroll)
  btnCheck.addEventListener('click', checkAnswer)
  btnReset.addEventListener('click', resetLevel)
  btnHint.addEventListener('click', toggleHint)
  btnTags.addEventListener('click', toggleTagsGuide)
  btnCollapseExplanation.addEventListener('click', toggleExplanation)
  btnCloseExplanation.addEventListener('click', closeExplanation)
  tagsClose.addEventListener('click', closeTagsGuide)
  tagsModal.addEventListener('click', (e) => {
    if (e.target === tagsModal) closeTagsGuide()
  })
  btnLanguage.addEventListener('click', toggleLanguageMenu)
  btnMap.addEventListener('click', () => openQuestModal('map'))
  btnSound.addEventListener('click', toggleSound)
  questClose.addEventListener('click', closeQuestModal)
  questModal.addEventListener('click', (e) => {
    if (e.target === questModal) closeQuestModal()
  })
  questTabMap.addEventListener('click', () => switchQuestTab('map'))
  questTabAchievements.addEventListener('click', () => switchQuestTab('achievements'))
  questBody.addEventListener('click', onQuestBodyClick)
  btnResetProgress.addEventListener('click', resetGame)
  bossStart.addEventListener('click', () => {
    bossOverlay.classList.add('hidden')
    editorInput.focus()
  })
  btnPlayAgain.addEventListener('click', resetGame)
  btnReviewLevels.addEventListener('click', () => {
    finalOverlay.classList.add('hidden')
    openQuestModal('map')
  })
  devClose.addEventListener('click', closeDevModal)
  devLogin.addEventListener('submit', unlockDevTool)
  devSolutions.addEventListener('click', onDevSolutionClick)
  devFill.addEventListener('click', fillDevAnswer)
  devModal.addEventListener('click', (e) => {
    if (e.target === devModal) closeDevModal()
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-picker')) closeLanguageMenu()
  })
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.shiftKey && e.code === 'KeyG' && !e.repeat) {
      e.preventDefault()
      runSkeleton()
      return
    }

    if (e.ctrlKey && e.altKey && e.shiftKey && e.code === 'KeyD') {
      e.preventDefault()
      if (devModal.classList.contains('hidden')) {
        openDevModal()
      } else {
        closeDevModal()
      }
      return
    }

    if (e.key === 'Escape') {
      closeTagsGuide()
      closeLanguageMenu()
      closeQuestModal()
      closeDevModal()
      bossOverlay.classList.add('hidden')
      finalOverlay.classList.add('hidden')
    }
  })
}

function onEditorInput() {
  startTimerIfNeeded()
  currentCSS = editorInput.value
  updateLineNumbers()
  renderPreview(currentCSS)
  scheduleLiveStatus()
}

function renderPreview(css) {
  const level = levels[currentLevelIndex]
  updatePreview(previewFrame, level.html, css, level.themeCSS)
}

function scheduleLiveStatus() {
  previewIsLive = false
  previewStatus.textContent = t('updating')
  clearTimeout(previewStatusTimeout)
  previewStatusTimeout = setTimeout(() => {
    previewIsLive = true
    previewStatus.textContent = t('live')
  }, 300)
}

function onEditorKeydown(e) {
  if (e.key === 'Tab') {
    e.preventDefault()
    const start = editorInput.selectionStart
    const end = editorInput.selectionEnd
    const value = editorInput.value
    editorInput.value = value.substring(0, start) + '  ' + value.substring(end)
    editorInput.selectionStart = editorInput.selectionEnd = start + 2
    onEditorInput()
  }

  if (e.key === 'Enter') {
    e.preventDefault()
    const start = editorInput.selectionStart
    const value = editorInput.value
    const lineStart = value.lastIndexOf('\n', start - 1) + 1
    const line = value.substring(lineStart, start)
    const indent = line.match(/^\s*/)[0]
    const lastChar = value[start - 1]
    const nextChar = value[start]
    let insertion = '\n' + indent

    if (lastChar === '{') {
      insertion = '\n' + indent + '  '
      if (nextChar === '}') {
        insertion += '\n' + indent
      }
    }

    editorInput.value = value.substring(0, start) + insertion + value.substring(start)
    editorInput.selectionStart = editorInput.selectionEnd = start + insertion.length
    onEditorInput()
  }
}

function updateLineNumbers() {
  const lines = editorInput.value.split('\n').length
  lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) =>
    `<div>${i + 1}</div>`
  ).join('')
}

function syncScroll() {
  lineNumbers.scrollTop = editorInput.scrollTop
}

function checkAnswer() {
  startTimerIfNeeded()
  const level = levels[currentLevelIndex]
  const startedAt = Date.now()

  renderPreview(currentCSS)

  const tryCheck = () => {
    if (isIframeReady(previewFrame) || Date.now() - startedAt > 2000) {
      applyCheckResult(level)
      return
    }
    setTimeout(tryCheck, 60)
  }

  setTimeout(tryCheck, 50)
}

function applyCheckResult(level) {
  let isCorrect = false
  try {
    isCorrect = level.validate(previewFrame)
  } catch {
    isCorrect = false
  }

  if (!isCorrect) {
    try {
      isCorrect = visuallyMatchesTarget(previewFrame, targetFrame)
    } catch {
      isCorrect = false
    }
  }

  if (!isCorrect) {
    run.wrongChecks += 1
    recordBadCheck(level.id)
    renderMissionStrip()
    flashScreen('fail')
    applyStamp(previewFrame.parentElement, 'fail', 'Try again')
    wrongFeedback()
    playError()
    showResult('error', 'resultError', false, null, false)
    return
  }

  stopTimer()
  if (run.elapsedMs <= 0 && run.startedAt) {
    run.elapsedMs = Date.now() - run.startedAt
  }

  const earnedStars = 1 +
    (run.hintsUsed === 0 ? 1 : 0) +
    (run.wrongChecks <= 1 ? 1 : 0)

  const rankBefore = getRank(getTotalXp()).key
  const result = recordLevelResult(level.id, {
    stars: earnedStars,
    timeMs: run.elapsedMs
  })

  const lastRun = {
    correct: true,
    wrongChecks: run.wrongChecks,
    timeMs: run.elapsedMs
  }
  let newAchievements = checkNewAchievements(lastRun)

  if (isDailyMode && level.id === dailyLevelId) {
    if (completeDailyChallenge(level.id)) {
      const daily = getDailyChallenge()
      showToast(t('dailyTitle'), t('toastDailyDone', { n: daily.streak }), 'daily')
      playAchievement()
      newAchievements = [...new Set([...newAchievements, ...checkNewAchievements(lastRun)])]
    }
  }

  const rankAfter = getRank(getTotalXp())
  const rankUp = rankAfter.key !== rankBefore

  const world = getWorldForLevel(level.id)
  const worldCleared = world.levelIds.every(levelId => isLevelSolved(levelId))
  if (isBossLevel(level.id) && result.firstSolve && worldCleared && !seenWorldClears.has(world.id)) {
    seenWorldClears.add(world.id)
    showToast(t('worldCleared'), t('toastWorldCleared'), 'achievement')
  }

  const extra = {
    stars: earnedStars,
    bestStars: result.bestStars,
    xpGained: result.xpGained,
    timeMs: run.elapsedMs,
    rank: rankAfter,
    rankUp,
    newAchievements,
    firstSolve: result.firstSolve
  }

  updateHeader()
  renderMissionStrip(earnedStars)
  showLevelSuccess(level, extra)
  playSuccess()
  setTimeout(() => playStar(earnedStars), 120)
  if (rankUp) playRankUp()
  if (newAchievements.length) {
    playAchievement()
    newAchievements.forEach(id => showAchievementToast(id))
  }

  if (currentLevelIndex >= levels.length - 1 && !finalShown) {
    finalShown = true
    setTimeout(showFinalOverlay, 900)
  }
}

function showLevelSuccess(level, extra) {
  const isLastLevel = currentLevelIndex >= levels.length - 1
  const messageKey = isLastLevel ? 'resultLastLevel' : 'resultSuccess'

  const showNext = !isLastLevel && !isDailyMode
  showResult(
    'success',
    messageKey,
    showNext,
    getExplanationFor(level, currentCSS),
    extra.firstSolve,
    {},
    { level, css: currentCSS },
    extra
  )

  if (extra.firstSolve) {
    spawnParticles()
    previewFrame.parentElement.classList.add('success-glow')
    flashScreen('pass')
    applyStamp(previewFrame.parentElement, 'pass', 'Correct!')
  }
}

function getExplanationFor(level, css) {
  const clean = (text) => text.replace(/\s+/g, '').toLowerCase()
  const studentCss = clean(css)
  const solutions = getLevelText(level).solutions

  const exact = level.solutions.findIndex(solution => clean(solution.css) === studentCss)
  if (exact >= 0) return solutions[exact]

  const keyword = level.solutions.findIndex(solution => {
    const display = solution.css.match(/display:\s*(flex|grid)/)
    return display && studentCss.includes(clean(display[0]))
  })
  if (keyword >= 0) return solutions[keyword]

  return solutions[0]
}

function resetLevel() {
  const level = levels[currentLevelIndex]
  const text = getLevelText(level)
  currentCSS = text.starterCSS
  editorInput.value = text.starterCSS
  updateLineNumbers()
  renderPreview(currentCSS)
  scheduleLiveStatus()
  hideResult()
  renderMissionStrip()
  editorInput.focus()
}

function toggleHint() {
  if (isDailyMode) {
    showToast(t('dailyTitle'), t('toastHintOff'), 'daily')
    return
  }

  if (!hintBox.classList.contains('visible') && !run.hintRevealed) {
    run.hintRevealed = true
    run.hintsUsed += 1
    renderMissionStrip()
  }

  hintBox.classList.toggle('visible')
  updateHintButton()
}

function updateHintButton() {
  btnHint.textContent = hintBox.classList.contains('visible') ? t('hideHint') : t('showHint')
  btnHint.disabled = isDailyMode
  btnHint.title = isDailyMode ? t('toastHintOff') : ''
}

function toggleExplanation() {
  explanationCollapsed = !explanationCollapsed
  explanationPanel.classList.toggle('explanation-collapsed', explanationCollapsed)
  updateCollapseButton()
}

function updateCollapseButton() {
  btnCollapseExplanation.innerHTML = explanationCollapsed ? '&#9656;' : '&#9662;'
  btnCollapseExplanation.title = explanationCollapsed
    ? t('expandExplanation')
    : t('shrinkExplanation')
  btnCollapseExplanation.setAttribute('aria-label', btnCollapseExplanation.title)
}

function closeExplanation() {
  explanationPanel.classList.add('hidden')
}

function toggleTagsGuide() {
  if (tagsModal.classList.contains('hidden')) {
    renderTagsGuide()
    tagsModal.classList.remove('hidden')
  } else {
    closeTagsGuide()
  }
}

function closeTagsGuide() {
  tagsModal.classList.add('hidden')
}

function renderTagsGuide() {
  let currentGroup = ''
  const items = cssTagsGuide.map(original => {
    const item = getTagText(original)
    const title = item.group !== currentGroup
      ? `<div class="tag-group">${item.group}</div>`
      : ''
    currentGroup = item.group

    return `${title}
      <div class="tag-item">
        <button class="tag-header" aria-expanded="false">
          <code class="tag-name">${item.tag}</code>
          <span class="tag-summary">${item.summary}</span>
          <span class="tag-arrow" aria-hidden="true">&#9656;</span>
        </button>
        <div class="tag-detail hidden">
          <p class="tag-text">${item.details}</p>
          <p class="tag-values"><span class="tag-values-label">${t('commonValues')}:</span> <code>${item.values}</code></p>
          <pre class="tag-example"><code>${escapeHtml(item.example)}</code></pre>
        </div>
      </div>`
  }).join('')

  tagsBody.innerHTML = items

  tagsBody.querySelectorAll('.tag-header').forEach(header => {
    header.addEventListener('click', () => toggleTagDetail(header))
  })
}

function toggleTagDetail(header) {
  const detail = header.parentElement.querySelector('.tag-detail')
  const isOpen = !detail.classList.contains('hidden')
  detail.classList.toggle('hidden', isOpen)
  header.classList.toggle('open', !isOpen)
  header.setAttribute('aria-expanded', String(!isOpen))

  if (!isOpen) {
    const tagName = header.querySelector('.tag-name').textContent.trim()
    recordTagOpened(tagName)
    const newAchievements = checkNewAchievements(null)
    if (newAchievements.length) {
      playAchievement()
      newAchievements.forEach(id => showAchievementToast(id))
    }
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function showResult(kind, messageKey, showNext, detail, openPanel, params = {}, context = {}, extra = null) {
  resultBanner.classList.remove('hidden', 'success', 'error', 'info')
  resultBanner.classList.add(kind)
  resultIcon.textContent = kind === 'success' ? '\u2713' : kind === 'error' ? '\u2717' : '\u2139'
  resultText.textContent = t(messageKey, params)

  lastResult = {
    kind,
    messageKey,
    showNext,
    detail,
    openPanel,
    params,
    level: context.level,
    css: context.css,
    extra
  }

  renderResultExtras(extra)

  if (detail) {
    const scrollTop = explanationBody.scrollTop
    explanationBody.innerHTML = renderExplanation(detail)
    explanationBody.scrollTop = scrollTop
    if (openPanel) {
      explanationPanel.classList.remove('hidden')
      explanationPanel.classList.toggle('explanation-collapsed', explanationCollapsed)
    }
  }

  renderResultActions(kind, showNext)
}

function renderResultExtras(extra) {
  if (!extra) {
    resultStars.classList.add('hidden')
    resultMeta.classList.add('hidden')
    resultStars.innerHTML = ''
    resultMeta.innerHTML = ''
    return
  }

  resultStars.classList.remove('hidden')
  resultStars.innerHTML = [0, 1, 2].map(index =>
    `<span class="result-star${index < extra.stars ? ' earned' : ''}" style="animation-delay:${index * 90}ms">\u2605</span>`
  ).join('')

  const parts = []
  if (extra.xpGained > 0) {
    parts.push(`<span><strong>${t('xpGained', { n: extra.xpGained })}</strong></span>`)
  }
  if (extra.timeMs > 0) {
    parts.push(`<span>${t('timeLabel')}: ${formatTime(extra.timeMs)}</span>`)
  }
  if (extra.bestStars > extra.stars) {
    parts.push(`<span>${t('personalBest', { n: extra.bestStars })}</span>`)
  }
  if (extra.rankUp) {
    parts.push(`<span>\u2191 <strong>${t(extra.rank.key)}</strong></span>`)
  }
  if (extra.newAchievements && extra.newAchievements.length) {
    const names = extra.newAchievements
      .map(id => achievements.find(item => item.id === id))
      .filter(Boolean)
      .map(item => getAchievementText(item, getLanguage()).title)
      .join(', ')
    parts.push(`<span>${t('achievementUnlocked')}: <strong>${escapeHtml(names)}</strong></span>`)
  }

  resultMeta.innerHTML = parts.join('')
  resultMeta.classList.toggle('hidden', parts.length === 0)
}

function renderResultActions(kind, showNext) {
  resultActions.innerHTML = ''
  if (kind !== 'success') return

  addResultAction(t('replay'), 'btn-replay', resetLevel)

  if (showNext && currentLevelIndex + 1 < levels.length) {
    addResultAction(t('nextLevel'), 'btn-next', () => loadLevel(currentLevelIndex + 1))
  }

  addResultAction(t('viewMap'), 'btn-map-open', () => openQuestModal('map'))
}

function addResultAction(label, className, handler) {
  const button = document.createElement('button')
  button.className = `btn ${className}`
  button.textContent = label
  button.addEventListener('click', handler)
  resultActions.appendChild(button)
}

function renderExplanation(detail) {
  if (!detail) return ''

  const items = (detail.explanation || [])
    .map(item => `
      <li class="explanation-item">
        <code class="explanation-term">${item.label}</code>
        <span class="explanation-text">${item.text}</span>
      </li>`)
    .join('')

  const tip = detail.tip
    ? `<p class="explanation-tip"><span class="explanation-tip-label">${t('keyIdea')}:</span> ${detail.tip}</p>`
    : ''

  return `<ul class="explanation-list">${items}</ul>${tip}`
}

function hideResult() {
  resultBanner.classList.add('hidden')
  explanationPanel.classList.add('hidden')
  explanationPanel.classList.remove('explanation-collapsed')
  explanationBody.innerHTML = ''
  resultStars.classList.add('hidden')
  resultMeta.classList.add('hidden')
  resultStars.innerHTML = ''
  resultMeta.innerHTML = ''
  resultActions.innerHTML = ''
  previewFrame.parentElement.classList.remove('success-glow', 'fail-flash')
  editorContainer.classList.remove('shake')
  lastResult = null
}

function flashScreen(kind) {
  document.querySelectorAll('.vignette-flash').forEach(f => f.remove())
  const flash = document.createElement('div')
  flash.className = 'vignette-flash ' + kind
  document.body.appendChild(flash)
  setTimeout(() => flash.remove(), 1000)
}

function applyStamp(host, kind, text) {
  host.querySelectorAll('.stamp').forEach(s => s.remove())
  const stamp = document.createElement('div')
  stamp.className = 'stamp ' + kind
  const icon = kind === 'pass' ? '\u2713' : '\u2717'
  stamp.innerHTML = `<span class="stamp-icon">${icon}</span><span class="stamp-text">${text}</span>`
  host.appendChild(stamp)
  setTimeout(() => stamp.remove(), 1700)
}

function wrongFeedback() {
  const wrapper = previewFrame.parentElement
  wrapper.classList.remove('fail-flash')
  void wrapper.offsetWidth
  wrapper.classList.add('fail-flash')

  editorContainer.classList.remove('shake')
  void editorContainer.offsetWidth
  editorContainer.classList.add('shake')
}

function spawnParticles() {
  const colors = ['#50FA7B', '#BD93F9', '#FF79C6', '#8BE9FD', '#F1FA8C']
  const bannerRect = resultBanner.getBoundingClientRect()
  const cx = bannerRect.left + bannerRect.width / 2
  const cy = bannerRect.top + bannerRect.height / 2

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = cx + 'px'
    particle.style.top = cy + 'px'
    particle.style.background = colors[Math.floor(Math.random() * colors.length)]

    const angle = (Math.PI * 2 * i) / 30
    const distance = 80 + Math.random() * 120
    const tx = Math.cos(angle) * distance
    const ty = Math.sin(angle) * distance - 50

    particle.style.setProperty('--tx', tx + 'px')
    particle.style.setProperty('--ty', ty + 'px')
    particle.style.animation = `particleFly ${0.6 + Math.random() * 0.4}s ease-out forwards`

    document.body.appendChild(particle)
    setTimeout(() => particle.remove(), 1200)
  }
}

function toggleLanguageMenu() {
  const isHidden = languageMenu.classList.contains('hidden')
  if (isHidden) buildLanguageMenu()
  languageMenu.classList.toggle('hidden')
  btnLanguage.setAttribute('aria-expanded', String(isHidden))
}

function closeLanguageMenu() {
  languageMenu.classList.add('hidden')
  btnLanguage.setAttribute('aria-expanded', 'false')
}

function buildLanguageMenu() {
  languageMenu.innerHTML = languages.map(language => `
    <button class="language-option${language.code === getLanguage() ? ' active' : ''}" data-lang="${language.code}" role="menuitem">
      <span class="language-option-name">${language.name}</span>
      <span class="language-option-check">${language.code === getLanguage() ? '&#10003;' : ''}</span>
    </button>
  `).join('')

  languageMenu.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => changeLanguage(option.dataset.lang))
  })
}

function changeLanguage(code) {
  if (code === getLanguage()) {
    closeLanguageMenu()
    return
  }

  const previousStarter = getLevelText(levels[currentLevelIndex]).starterCSS
  const editorHasStarter = editorInput.value.trim() === previousStarter.trim()

  setLanguage(code)
  localStorage.setItem(LANGUAGE_KEY, code)
  recordLanguageTried(code)
  closeLanguageMenu()

  const newAchievements = checkNewAchievements(null)
  applyLanguage(editorHasStarter)
  updateHeader()
  if (newAchievements.length) {
    playAchievement()
    newAchievements.forEach(id => showAchievementToast(id))
  }
}

function applyLanguage(editorHasStarter = true) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n)
  })

  document.documentElement.lang = getLanguage()
  btnLanguage.textContent = getLanguageName()
  btnLanguage.title = t('languageButton')
  btnCloseExplanation.title = t('removeExplanation')
  btnCloseExplanation.setAttribute('aria-label', t('removeExplanation'))
  devClose.title = t('devClose')
  devClose.setAttribute('aria-label', t('devClose'))
  updateMissionLabels()
  updateHintButton()
  updateSoundButton()
  updateHeader()
  refreshLevelText()
  previewStatus.textContent = previewIsLive ? t('live') : t('updating')

  if (editorHasStarter) {
    const text = getLevelText(levels[currentLevelIndex])
    editorInput.value = text.starterCSS
    currentCSS = text.starterCSS
    updateLineNumbers()
    renderPreview(currentCSS)
  }

  if (lastResult) {
    const detail = lastResult.level
      ? getExplanationFor(lastResult.level, lastResult.css || currentCSS)
      : lastResult.detail
    showResult(
      lastResult.kind,
      lastResult.messageKey,
      lastResult.showNext,
      detail,
      lastResult.openPanel,
      lastResult.params,
      { level: lastResult.level, css: lastResult.css },
      lastResult.extra
    )
  }

  if (!tagsModal.classList.contains('hidden')) renderTagsGuide()
  if (!questModal.classList.contains('hidden')) renderQuestBody()
  if (!bossOverlay.classList.contains('hidden')) refreshBossIntro()
  if (!finalOverlay.classList.contains('hidden')) refreshFinalStats()
  if (!devModal.classList.contains('hidden') && devUnlocked) renderDevAnswer()
}

function hashDevPassword(value) {
  let hash = 0x811c9dc5
  for (const character of value.trim().toLowerCase()) {
    hash ^= character.charCodeAt(0)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }
  return hash
}

function openDevModal() {
  devPassword.value = ''
  devError.classList.add('hidden')
  devSolutionIndex = 0

  if (devUnlocked) {
    showDevPanel()
  } else {
    devLogin.classList.remove('hidden')
    devPanel.classList.add('hidden')
  }

  devModal.classList.remove('hidden')
  if (!devUnlocked) {
    setTimeout(() => devPassword.focus(), 40)
  }
}

function closeDevModal() {
  devModal.classList.add('hidden')
  devPassword.value = ''
  devError.classList.add('hidden')
}

function unlockDevTool(event) {
  event.preventDefault()

  if (hashDevPassword(devPassword.value) !== DEV_PASSWORD_HASH) {
    devError.classList.remove('hidden')
    devPassword.value = ''
    devPassword.focus()
    return
  }

  devUnlocked = true
  devError.classList.add('hidden')
  devPassword.value = ''
  showDevPanel()
}

function showDevPanel() {
  devLogin.classList.add('hidden')
  devPanel.classList.remove('hidden')
  renderDevAnswer()
}

function renderDevAnswer() {
  const level = levels[currentLevelIndex]
  if (!level) return

  const text = getLevelText(level)
  devSolutionIndex = Math.min(devSolutionIndex, text.solutions.length - 1)
  const solution = text.solutions[devSolutionIndex] || text.solutions[0]
  if (!solution) return

  devLevel.textContent = t('devLevel', { n: level.id, title: text.title })
  devAnswer.value = solution.css
  devSolutions.classList.toggle('hidden', text.solutions.length < 2)
  devSolutions.innerHTML = text.solutions.map((_, index) => `
    <button
      class="dev-solution${index === devSolutionIndex ? ' active' : ''}"
      type="button"
      data-index="${index}"
    >${t('devSolution', { n: index + 1 })}</button>
  `).join('')
}

function onDevSolutionClick(event) {
  const button = event.target.closest('.dev-solution')
  if (!button) return
  devSolutionIndex = Number(button.dataset.index) || 0
  renderDevAnswer()
}

function fillDevAnswer() {
  if (!devUnlocked) return

  const level = levels[currentLevelIndex]
  const text = getLevelText(level)
  const solution = text.solutions[devSolutionIndex] || text.solutions[0]
  if (!solution) return

  editorInput.value = solution.css
  onEditorInput()
  hideResult()
  closeDevModal()
  showToast(t('devTitle'), t('devLoaded'), 'achievement')
  editorInput.focus()
}

function refreshLevelText() {
  const level = levels[currentLevelIndex]
  const text = getLevelText(level)

  levelBadge.textContent = t('levelBadge', { n: level.id })
  worldLabel.textContent = t(getWorldNameKey(level.id))
  bossBadge.classList.toggle('hidden', !isBossLevel(level.id))
  challengeTitle.textContent = text.title
  challengeDescription.textContent = text.description
  hintText.textContent = text.hint
  renderMissionStrip()
}

function updateMissionLabels() {
  missionSolveLabel.textContent = t('missionSolve')
  missionNoHintLabel.textContent = t('missionNoHint')
  missionFirstTryLabel.textContent = t('missionFirstTry')
}

function renderMissionStrip(resultStars = null) {
  const level = levels[currentLevelIndex]
  if (!level) return
  const best = getLevelProgress(level.id)
  const earned = resultStars !== null ? resultStars : (best.solved ? best.bestStars : 0)

  const criteria = [
    { element: missionStars[0], lost: false },
    { element: missionStars[1], lost: run.hintsUsed > 0 },
    { element: missionStars[2], lost: run.wrongChecks > 1 }
  ]

  criteria.forEach((criterion, index) => {
    if (!criterion.element) return
    criterion.element.classList.remove('earned', 'lost', 'ready')
    if (index < earned) {
      criterion.element.classList.add('earned')
    } else if (criterion.lost) {
      criterion.element.classList.add('lost')
    } else {
      criterion.element.classList.add('ready')
    }
  })

  missionStrip.classList.toggle('daily', isDailyMode)
  missionStrip.title = isDailyMode ? t('missionDaily') : ''
}

function resetRun() {
  stopTimer()
  run = createRun()
  updateTimerDisplay(0)
  renderMissionStrip()
}

function startTimerIfNeeded() {
  if (run.startedAt) return
  run.startedAt = Date.now()
  run.elapsedMs = 0
  updateTimerDisplay(0)
  clearInterval(timerId)
  timerId = setInterval(() => {
    if (!run.startedAt) return
    run.elapsedMs = Date.now() - run.startedAt
    updateTimerDisplay(run.elapsedMs)
  }, 250)
}

function stopTimer() {
  clearInterval(timerId)
  timerId = null
  if (run.startedAt) {
    run.elapsedMs = Date.now() - run.startedAt
    run.startedAt = null
    updateTimerDisplay(run.elapsedMs)
  }
}

function updateTimerDisplay(ms) {
  if (!missionTimer) return
  missionTimer.textContent = formatTime(ms)
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor((ms || 0) / 1000))
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

function updateHeader() {
  const xp = getTotalXp()
  const stars = getTotalStars()
  const rank = getRank(xp)

  rankName.textContent = t(rank.key)
  xpText.textContent = t('xpLabel', { xp, max: MAX_XP })
  xpFill.style.width = `${Math.min(100, (xp / MAX_XP) * 100)}%`
  starsTotal.textContent = `\u2605 ${stars} / ${MAX_STARS}`
  starsTotal.title = t('starsShort', { n: stars, max: MAX_STARS })
}

function toggleSound() {
  const next = !isSoundEnabled()
  setSoundEnabled(next)
  setSoundOn(next)
  updateSoundButton()
  if (next) playClick()
}

function updateSoundButton() {
  btnSound.classList.toggle('active', isSoundEnabled())
  btnSound.setAttribute('aria-pressed', String(isSoundEnabled()))
  btnSound.textContent = isSoundEnabled() ? 'SFX ON' : 'SFX OFF'
  btnSound.title = `${t('toggleSound')} (${t(isSoundEnabled() ? 'soundOn' : 'soundOff')})`
}

function getCampaignTimeMs(state) {
  const first = state.levels[levels[0].id]?.solvedAt
  const last = state.levels[levels[levels.length - 1].id]?.solvedAt
  if (!first || !last) return null
  const elapsed = new Date(last).getTime() - new Date(first).getTime()
  return Number.isFinite(elapsed) && elapsed > 0 ? elapsed : null
}

function buildAchievementContext(lastRun = null) {
  const progress = getProgress()
  return {
    progress,
    solvedCount: getSolvedCount(),
    totalLevels: levels.length,
    totalStars: getTotalStars(),
    completionTimeMs: getCampaignTimeMs(progress),
    lastRun
  }
}

function checkNewAchievements(lastRun = null) {
  const context = buildAchievementContext(lastRun)
  const newIds = achievements
    .filter(achievement => !hasAchievement(achievement.id) && achievement.check(context))
    .map(achievement => achievement.id)

  unlockAchievements(newIds)
  return newIds
}

function showAchievementToast(id) {
  const achievement = achievements.find(item => item.id === id)
  if (!achievement) return
  const text = getAchievementText(achievement, getLanguage())
  const title = achievement.secret ? t('secretAchievementUnlocked') : text.title
  showToast(title, text.description, 'achievement')
}

function maybeRunSkeleton() {
  if (Math.random() < SKELETON_CHANCE) runSkeleton()
}

function runSkeleton() {
  if (!skeletonRunner) return

  const spriteWidth = skeletonRunner.offsetWidth || 220
  const spriteHeight = skeletonRunner.offsetHeight || (spriteWidth * 130) / 110
  const path = createSkeletonPath(spriteWidth, spriteHeight)
  const orientation = getSkeletonOrientation(path)
  const duration = SKELETON_DURATION_MS

  clearTimeout(skeletonTimeout)
  skeletonRunner.classList.remove('is-running')
  skeletonRunner.style.setProperty('--skeleton-start-x', `${path.startX}px`)
  skeletonRunner.style.setProperty('--skeleton-start-y', `${path.startY}px`)
  skeletonRunner.style.setProperty('--skeleton-end-x', `${path.endX}px`)
  skeletonRunner.style.setProperty('--skeleton-end-y', `${path.endY}px`)
  skeletonRunner.style.setProperty('--skeleton-angle', `${orientation.angle}deg`)
  skeletonRunner.style.setProperty('--skeleton-flip', `${orientation.flip}`)
  skeletonRunner.style.setProperty('--skeleton-duration', `${duration}ms`)

  void skeletonRunner.offsetWidth
  skeletonRunner.classList.add('is-running')
  skeletonRunner.setAttribute('aria-hidden', 'false')

  if (recordSkeletonSeen()) {
    const newIds = checkNewAchievements()
    if (newIds.length) playAchievement()
    newIds.forEach(id => showAchievementToast(id))
  }

  skeletonTimeout = setTimeout(() => {
    skeletonRunner.classList.remove('is-running')
    skeletonRunner.setAttribute('aria-hidden', 'true')
  }, duration + 100)
}

function createSkeletonPath(spriteWidth, spriteHeight) {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const margin = 24
  const span = Math.max(spriteWidth, spriteHeight)
  const halfDiagonal = Math.hypot(spriteWidth, spriteHeight) / 2
  const extraX = Math.max(0, halfDiagonal - spriteWidth / 2)
  const extraY = Math.max(0, halfDiagonal - spriteHeight / 2)
  const maxX = Math.max(0, viewportWidth - span)
  const maxY = Math.max(0, viewportHeight - span)
  const mode = pickRandom(['horizontal', 'vertical', 'diagonal'])

  if (mode === 'horizontal') {
    const y = randomBetween(0, maxY)
    return horizontalPath(y, y, spriteWidth, viewportWidth, margin, extraX)
  }

  if (mode === 'vertical') {
    const x = randomBetween(0, maxX)
    return verticalPath(x, x, spriteHeight, viewportHeight, margin, extraY)
  }

  if (Math.random() < 0.5) {
    const [startY, endY] = separatePair(randomBetween(0, maxY), randomBetween(0, maxY), maxY)
    return horizontalPath(startY, endY, spriteWidth, viewportWidth, margin, extraX)
  }

  const [startX, endX] = separatePair(randomBetween(0, maxX), randomBetween(0, maxX), maxX)
  return verticalPath(startX, endX, spriteHeight, viewportHeight, margin, extraY)
}

function horizontalPath(startY, endY, spriteWidth, viewportWidth, margin, extraX) {
  const leftToRight = Math.random() < 0.5
  return {
    startX: leftToRight ? -spriteWidth - extraX - margin : viewportWidth + extraX + margin,
    startY,
    endX: leftToRight ? viewportWidth + extraX + margin : -spriteWidth - extraX - margin,
    endY
  }
}

function verticalPath(startX, endX, spriteHeight, viewportHeight, margin, extraY) {
  const topToBottom = Math.random() < 0.5
  return {
    startX,
    startY: topToBottom ? -spriteHeight - extraY - margin : viewportHeight + extraY + margin,
    endX,
    endY: topToBottom ? viewportHeight + extraY + margin : -spriteHeight - extraY - margin
  }
}

function separatePair(first, second, max) {
  const minimum = Math.min(max, Math.max(60, max * 0.25))
  if (Math.abs(second - first) >= minimum) return [first, second]
  if (first <= max / 2) return [first, Math.min(max, first + minimum)]
  return [Math.max(0, first - minimum), first]
}

function getSkeletonOrientation(path) {
  let angle = Math.atan2(path.endY - path.startY, path.endX - path.startX) * (180 / Math.PI)
  let flip = 1

  if (angle > 90 || angle < -90) {
    angle += 180
    flip = -1
  }

  angle = (((angle + 180) % 360) + 360) % 360 - 180
  return { angle, flip }
}

function randomBetween(min, max) {
  return min + Math.random() * Math.max(0, max - min)
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)]
}

function showToast(title, text, kind = '') {
  const toast = document.createElement('div')
  toast.className = `toast ${kind}`.trim()

  const icon = document.createElement('span')
  icon.className = 'toast-icon'
  icon.textContent = kind === 'error' ? '\u2717' : kind === 'daily' ? '\u2605' : '\u2713'

  const content = document.createElement('div')
  const titleElement = document.createElement('div')
  titleElement.className = 'toast-title'
  titleElement.textContent = title
  content.appendChild(titleElement)

  if (text) {
    const textElement = document.createElement('div')
    textElement.className = 'toast-text'
    textElement.textContent = text
    content.appendChild(textElement)
  }

  toast.appendChild(icon)
  toast.appendChild(content)
  toastStack.appendChild(toast)

  while (toastStack.children.length > 4) {
    toastStack.firstElementChild.remove()
  }

  setTimeout(() => {
    toast.classList.add('leaving')
    setTimeout(() => toast.remove(), 260)
  }, 4200)
}

function maybeShowBossIntro(level, text) {
  if (isDailyMode) return
  if (!isBossLevel(level.id)) return
  if (isLevelSolved(level.id)) return
  if (seenBossIntros.has(level.id)) return

  seenBossIntros.add(level.id)
  bossTitle.textContent = text.title
  bossText.textContent = t('bossIntro')
  bossOverlay.classList.remove('hidden')
}

function refreshBossIntro() {
  const level = levels[currentLevelIndex]
  if (!level) return
  bossTitle.textContent = getLevelText(level).title
  bossText.textContent = t('bossIntro')
}

function showFinalOverlay() {
  finalOverlay.classList.remove('hidden')
  refreshFinalStats()
  playRankUp()
}

function refreshFinalStats() {
  const xp = getTotalXp()
  const rank = getRank(xp)
  finalStats.textContent = t('finalStats', {
    stars: getTotalStars(),
    xp,
    rank: t(rank.key)
  })
}

function openQuestModal(tab = 'map') {
  questTab = tab
  updateQuestTabs()
  renderQuestBody()
  questModal.classList.remove('hidden')
}

function closeQuestModal() {
  questModal.classList.add('hidden')
}

function switchQuestTab(tab) {
  questTab = tab
  updateQuestTabs()
  renderQuestBody()
}

function updateQuestTabs() {
  questTabMap.classList.toggle('active', questTab === 'map')
  questTabAchievements.classList.toggle('active', questTab === 'achievements')
}

function onQuestBodyClick(event) {
  const dailyButton = event.target.closest('.daily-play')
  if (dailyButton) {
    const levelId = Number(dailyButton.dataset.levelId)
    if (levelId) startDailyChallenge(levelId)
    return
  }

  const card = event.target.closest('.map-level')
  if (!card) return

  const levelId = Number(card.dataset.levelId)
  if (!isLevelUnlocked(levelId)) {
    showToast(t('lockedLevel'), t('lockedLevelToast', { n: levelId - 1 }), 'error')
    return
  }

  closeQuestModal()
  loadLevelById(levelId)
}

function renderQuestBody() {
  if (questTab === 'achievements') {
    renderAchievements()
  } else {
    renderMap()
  }
}

function renderQuestSummary() {
  const xp = getTotalXp()
  const stars = getTotalStars()
  const rank = getRank(xp)
  const unlocked = getUnlockedAchievements().length

  return `
    <div class="quest-summary">
      <span>${t('starsLabel')}: <span class="summary-stars">\u2605 ${stars} / ${MAX_STARS}</span></span>
      <span><strong>${t(rank.key)}</strong></span>
      <span>${t('xpLabel', { xp, max: MAX_XP })}</span>
      <span>${t('achievementsLabel')}: ${unlocked} / ${achievements.length}</span>
    </div>`
}

function renderDailyCard() {
  const solvedLevels = levels.filter(level => isLevelSolved(level.id))

  if (!solvedLevels.length) {
    return `
      <div class="daily-card">
        <div class="daily-info">
          <div class="daily-title">${t('dailyTitle')}</div>
          <div class="daily-text">${t('dailyLocked')}</div>
        </div>
      </div>`
  }

  const key = getDateKey()
  let hash = 0
  for (const character of key) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0
  }
  const picked = solvedLevels[hash % solvedLevels.length]
  const state = ensureDailyChallenge(picked.id)
  const level = levels.find(item => item.id === state.levelId) || picked
  const done = state.done && state.date === key
  const levelText = getLevelText(level)
  const streak = state.streak || 0

  return `
    <div class="daily-card">
      <div class="daily-info">
        <div class="daily-title">${t('dailyTitle')}</div>
        <div class="daily-text">
          ${t('dailyBody', { n: level.id })}<br>
          <strong>${escapeHtml(levelText.title)}</strong>
        </div>
        ${streak > 0 ? `<div class="daily-streak">${t('dailyStreak', { n: streak })}</div>` : ''}
      </div>
      <button class="btn btn-check daily-play" data-level-id="${level.id}" ${done ? 'disabled' : ''}>
        ${done ? t('dailyDone') : t('dailyPlay')}
      </button>
    </div>`
}

function renderMap() {
  const worldBlocks = worlds.map(world => {
    const worldLevels = world.levelIds
      .map(levelId => levels.find(level => level.id === levelId))
      .filter(Boolean)

    const solved = worldLevels.filter(level => isLevelSolved(level.id)).length
    const stars = worldLevels.reduce(
      (total, level) => total + getLevelProgress(level.id).bestStars,
      0
    )

    const cards = worldLevels.map(level => {
      const text = getLevelText(level)
      const progress = getLevelProgress(level.id)
      const unlocked = isLevelUnlocked(level.id)
      const current = currentLevelIndex === levels.findIndex(item => item.id === level.id)
      const boss = isBossLevel(level.id)

      const starMarkup = [0, 1, 2].map(index =>
        `<span class="${index < progress.bestStars ? 'earned' : ''}">\u2605</span>`
      ).join('')

      return `
        <button
          class="map-level${unlocked ? '' : ' locked'}${current ? ' current' : ''}${progress.solved ? ' solved' : ''}${boss ? ' boss' : ''}"
          data-level-id="${level.id}"
          aria-label="${escapeHtml(text.title)}"
        >
          <div class="map-level-top">
            <span class="map-level-number">${level.id}</span>
            ${boss ? `<span class="map-level-boss">${t('bossLevel')}</span>` : ''}
            ${unlocked ? '' : `<span class="map-level-lock">${t('lockedLevel')}</span>`}
          </div>
          <span class="map-level-title">${escapeHtml(text.title)}</span>
          <span class="map-stars">${starMarkup}</span>
          ${progress.bestTimeMs > 0
            ? `<span class="map-time">${t('bestTime', { time: formatTime(progress.bestTimeMs) })}</span>`
            : ''}
        </button>`
    }).join('')

    return `
      <div class="world-block">
        <div class="world-heading">
          <div>
            <h4>${t(world.nameKey)}</h4>
            <p>${t(world.subtitleKey)}</p>
          </div>
          <span class="world-progress">${solved} / ${world.levelIds.length} \u00b7 \u2605 ${stars}</span>
        </div>
        <div class="map-grid">${cards}</div>
      </div>`
  }).join('')

  questBody.innerHTML = renderQuestSummary() + renderDailyCard() + worldBlocks
}

function renderAchievements() {
  const unlocked = getUnlockedAchievements()
  const items = achievements.map(achievement => {
    const earned = unlocked.includes(achievement.id)
    const text = getAchievementText(achievement, getLanguage())
    const hidden = achievement.secret && !earned
    const title = hidden ? t('secretAchievementTitle') : text.title
    const description = hidden ? t('secretAchievementDescription') : text.description
    return `
      <div class="achievement-item${earned ? ' unlocked' : ''}">
        <div class="achievement-icon">${earned ? '\u2713' : '\u2022'}</div>
        <div class="achievement-text">
          <h5>${escapeHtml(title)}</h5>
          <p>${escapeHtml(description)}</p>
        </div>
      </div>`
  }).join('')

  questBody.innerHTML = `
    <p class="achievements-intro">${t('achievementsIntro')}</p>
    <p class="achievements-count">${t('achievementsCount', {
      done: unlocked.length,
      total: achievements.length
    })}</p>
    ${items}`
}

function startDailyChallenge(levelId) {
  closeQuestModal()
  loadLevelById(levelId, { daily: true })
  showToast(t('dailyTitle'), t('missionDaily'), 'daily')
}

function resetGame() {
  if (!window.confirm(t('resetConfirm'))) return

  resetProgress()
  setSoundEnabled(false)
  updateSoundButton()
  seenBossIntros.clear()
  seenWorldClears.clear()
  finalShown = false
  closeQuestModal()
  finalOverlay.classList.add('hidden')
  bossOverlay.classList.add('hidden')
  loadLevelById(levels[0].id)
  updateHeader()
}

init()
