import levels from './levels.js'
import { highlightCSS } from './editor.js'
import { updatePreview, updateTarget } from './preview.js'

const editorInput = document.getElementById('editorInput')
const highlightedCode = document.getElementById('highlightedCode')
const lineNumbers = document.getElementById('lineNumbers')
const editorContainer = document.getElementById('editorContainer')
const previewFrame = document.getElementById('previewFrame')
const targetFrame = document.getElementById('targetFrame')
const targetWrapper = document.getElementById('targetWrapper')
const levelNav = document.getElementById('levelNav')
const levelBadge = document.getElementById('levelBadge')
const challengeTitle = document.getElementById('challengeTitle')
const challengeDescription = document.getElementById('challengeDescription')
const hintText = document.getElementById('hintText')
const hintBox = document.getElementById('hintBox')
const progressText = document.getElementById('progressText')
const resultBanner = document.getElementById('resultBanner')
const resultIcon = document.getElementById('resultIcon')
const resultText = document.getElementById('resultText')
const previewStatus = document.getElementById('previewStatus')
const btnCheck = document.getElementById('btnCheck')
const btnReset = document.getElementById('btnReset')
const btnHint = document.getElementById('btnHint')

let currentLevelIndex = 0
let completedLevels = new Set()
let currentCSS = ''

function init() {
  buildLevelNav()
  loadLevel(0)
  setupEventListeners()
}

function buildLevelNav() {
  levelNav.innerHTML = ''
  levels.forEach((level, index) => {
    const dot = document.createElement('button')
    dot.className = 'level-dot'
    dot.textContent = level.id
    dot.title = level.title
    dot.addEventListener('click', () => loadLevel(index))
    levelNav.appendChild(dot)
  })
}

function updateLevelNav() {
  const dots = levelNav.querySelectorAll('.level-dot')
  dots.forEach((dot, index) => {
    dot.classList.remove('active', 'completed')
    if (index === currentLevelIndex) {
      dot.classList.add('active')
    } else if (completedLevels.has(index)) {
      dot.classList.add('completed')
    }
  })
  progressText.textContent = `${completedLevels.size} / ${levels.length}`
}

function loadLevel(index) {
  currentLevelIndex = index
  const level = levels[index]

  levelBadge.textContent = `Level ${level.id}`
  challengeTitle.textContent = level.title
  challengeDescription.textContent = level.description
  hintText.textContent = level.hint
  hintBox.classList.remove('visible')

  currentCSS = level.starterCSS
  editorInput.value = level.starterCSS
  updateHighlight()
  updateLineNumbers()

  updatePreview(previewFrame, level.html, level.starterCSS)
  updateTarget(targetFrame, level.html, level.targetCSS)
  targetWrapper.classList.add('visible')

  hideResult()
  updateLevelNav()
  editorInput.focus()
}

function setupEventListeners() {
  editorInput.addEventListener('input', onEditorInput)
  editorInput.addEventListener('keydown', onEditorKeydown)
  editorInput.addEventListener('scroll', syncScroll)
  btnCheck.addEventListener('click', checkAnswer)
  btnReset.addEventListener('click', resetLevel)
  btnHint.addEventListener('click', toggleHint)
}

function onEditorInput() {
  currentCSS = editorInput.value
  updateHighlight()
  updateLineNumbers()
  updatePreview(previewFrame, levels[currentLevelIndex].html, currentCSS)
  previewStatus.textContent = 'Updating...'
  clearTimeout(previewStatus._timeout)
  previewStatus._timeout = setTimeout(() => {
    previewStatus.textContent = 'Live'
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

function updateHighlight() {
  highlightedCode.innerHTML = highlightCSS(editorInput.value)
}

function updateLineNumbers() {
  const lines = editorInput.value.split('\n').length
  lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) =>
    `<div>${i + 1}</div>`
  ).join('')
}

function syncScroll() {
  const highlight = document.getElementById('editorHighlight')
  highlight.scrollTop = editorInput.scrollTop
  highlight.scrollLeft = editorInput.scrollLeft
  lineNumbers.scrollTop = editorInput.scrollTop
}

function checkAnswer() {
  const level = levels[currentLevelIndex]

  updatePreview(previewFrame, level.html, currentCSS)

  setTimeout(() => {
    const isCorrect = level.validate(previewFrame)

    if (isCorrect) {
      completedLevels.add(currentLevelIndex)
      showResult(true, 'Correct! Well done!')
      updateLevelNav()
      spawnParticles()
      previewFrame.parentElement.classList.add('success-glow')

      if (currentLevelIndex < levels.length - 1) {
        setTimeout(() => {
          loadLevel(currentLevelIndex + 1)
        }, 1800)
      }
    } else {
      showResult(false, 'Not quite right. Try again!')
    }
  }, 150)
}

function resetLevel() {
  loadLevel(currentLevelIndex)
}

function toggleHint() {
  hintBox.classList.toggle('visible')
  btnHint.textContent = hintBox.classList.contains('visible') ? 'Hide Hint' : 'Show Hint'
}

function showResult(success, message) {
  resultBanner.classList.remove('hidden', 'success', 'error')
  resultBanner.classList.add(success ? 'success' : 'error')
  resultIcon.textContent = success ? '\u2713' : '\u2717'
  resultText.textContent = message
}

function hideResult() {
  resultBanner.classList.add('hidden')
  previewFrame.parentElement.classList.remove('success-glow')
}

function spawnParticles() {
  const colors = ['#3FB950', '#58A6FF', '#D2A8FF', '#F0883E', '#F778BA']
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

init()
