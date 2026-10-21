import levels, { cssReference } from './levels.js'
import { updatePreview, updateTarget } from './preview.js'

const editorInput = document.getElementById('editorInput')
const editorContainer = document.getElementById('editorContainer')
const lineNumbers = document.getElementById('lineNumbers')
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
const explanationPanel = document.getElementById('explanationPanel')
const explanationBody = document.getElementById('explanationBody')
const btnCollapseExplanation = document.getElementById('btnCollapseExplanation')
const btnCloseExplanation = document.getElementById('btnCloseExplanation')
const previewStatus = document.getElementById('previewStatus')
const btnCheck = document.getElementById('btnCheck')
const btnReset = document.getElementById('btnReset')
const btnHint = document.getElementById('btnHint')
const btnAnswer = document.getElementById('btnAnswer')
const btnReference = document.getElementById('btnReference')
const referenceModal = document.getElementById('referenceModal')
const referenceBody = document.getElementById('referenceBody')
const referenceClose = document.getElementById('referenceClose')

let currentLevelIndex = 0
let completedLevels = new Set()
let currentCSS = ''
let solutionIndex = 0
// Evita repetir a celebração (partículas, flash e carimbo) quando o aluno
// clica em "Check Answer" de novo no mesmo nível.
let levelCelebrated = false
// Estado do painel de explicação: recolhido (só o título) ou fechado (some).
let explanationCollapsed = false
// Verdadeiro quando o botão "Show Answer" placed uma solução no editor.
let answerLoaded = false

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
  solutionIndex = 0
  levelCelebrated = false
  answerLoaded = false
  explanationCollapsed = false
  const level = levels[index]

  levelBadge.textContent = `Level ${level.id}`
  challengeTitle.textContent = level.title
  challengeDescription.textContent = level.description
  hintText.textContent = level.hint
  hintBox.classList.remove('visible')
  closeReference()

  currentCSS = level.starterCSS
  editorInput.value = level.starterCSS
  updateLineNumbers()

  updatePreview(previewFrame, level.html, level.starterCSS)
  updateTarget(targetFrame, level.html, level.solutions[0].css)
  targetWrapper.classList.add('visible')

  hideResult()
  updateLevelNav()
  updateAnswerButton()
  updateCollapseButton()
  editorInput.focus()
}

function setupEventListeners() {
  editorInput.addEventListener('input', onEditorInput)
  editorInput.addEventListener('keydown', onEditorKeydown)
  editorInput.addEventListener('scroll', syncScroll)
  btnCheck.addEventListener('click', checkAnswer)
  btnReset.addEventListener('click', resetLevel)
  btnHint.addEventListener('click', toggleHint)
  btnAnswer.addEventListener('click', showAnswer)
  btnReference.addEventListener('click', toggleReference)
  btnCollapseExplanation.addEventListener('click', toggleExplanation)
  btnCloseExplanation.addEventListener('click', closeExplanation)
  referenceClose.addEventListener('click', closeReference)
  referenceModal.addEventListener('click', (e) => {
    if (e.target === referenceModal) closeReference()
  })
}

function onEditorInput() {
  currentCSS = editorInput.value
  // O aluno mexeu no código: a solução carregada pelo "Show Answer" já não
  // está mais no editor, então o botão volta a ser "Show Answer".
  if (answerLoaded) {
    answerLoaded = false
    updateAnswerButton()
  }
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
  const level = levels[currentLevelIndex]
  const startedAt = Date.now()

  updatePreview(previewFrame, level.html, currentCSS)

  // A validação só pode acontecer quando o preview já mostra a versão mais
  // recente do CSS, senão o preview "corrigido" e a resposta não batem.
  const tryCheck = () => {
    if (isPreviewReady() || Date.now() - startedAt > 2000) {
      applyCheckResult(level)
      return
    }
    setTimeout(tryCheck, 60)
  }

  setTimeout(tryCheck, 50)
}

function isPreviewReady() {
  const doc = previewFrame.contentDocument
  if (!doc || !doc.body) return false
  return doc.documentElement.dataset.renderId === previewFrame.dataset.renderId
}

function applyCheckResult(level) {
  let isCorrect = false
  try {
    isCorrect = level.validate(previewFrame)
  } catch (error) {
    isCorrect = false
  }

  if (isCorrect) {
    completedLevels.add(currentLevelIndex)
    updateLevelNav()
    // A celebração acontece só na primeira resposta correta do nível.
    // Se o aluno clicar em "Check Answer" de novo, o resultado é
    // atualizado sem partículas, sem flash e sem carimbo.
    showLevelSuccess(level, !levelCelebrated)
    levelCelebrated = true
  } else {
    flashScreen('fail')
    applyStamp(previewFrame.parentElement, 'fail', 'Try again')
    wrongFeedback()

    showResult('error', 'Not quite right. Try again!', false)
  }
}

function showLevelSuccess(level, celebrate) {
  const isLastLevel = currentLevelIndex >= levels.length - 1
  const message = isLastLevel ? 'You completed all levels!' : 'Correct! Well done!'

  if (celebrate) {
    spawnParticles()
    previewFrame.parentElement.classList.add('success-glow')
    flashScreen('pass')
    applyStamp(previewFrame.parentElement, 'pass', 'Correct!')
  }

  // O painel de explicação só abre sozinho na primeira resposta correta.
  showResult('success', message, !isLastLevel, getExplanationFor(level, currentCSS), celebrate)
}

// Escolhe a explicação que combina com o código escrito pelo aluno.
// Se ele usar a outra solução (ex.: Grid no nível 6), a explicação
// mostrada também é a da solução que ele escreveu.
function getExplanationFor(level, css) {
  const clean = (text) => text.replace(/\s+/g, '').toLowerCase()
  const studentCss = clean(css)

  const exact = level.solutions.find(solution => clean(solution.css) === studentCss)
  if (exact) return exact

  const keyword = level.solutions.find(solution => {
    const display = solution.css.match(/display:\s*(flex|grid)/)
    return display && studentCss.includes(clean(display[0]))
  })

  return keyword || level.solutions[0]
}

function resetLevel() {
  loadLevel(currentLevelIndex)
}

function toggleHint() {
  hintBox.classList.toggle('visible')
  btnHint.textContent = hintBox.classList.contains('visible') ? 'Hide Hint' : 'Show Hint'
}

function showAnswer() {
  // Se já existe uma solução carregada, o botão remove ela e devolve o
  // código inicial para o aluno tentar de novo.
  if (answerLoaded) {
    clearAnswer()
    return
  }

  const level = levels[currentLevelIndex]
  const solution = level.solutions[solutionIndex % level.solutions.length]
  editorInput.value = solution.css
  currentCSS = solution.css
  answerLoaded = true
  updateLineNumbers()
  updatePreview(previewFrame, level.html, solution.css)
  updateAnswerButton()
  solutionIndex++
  const count = level.solutions.length
  // Se o nível já foi resolvido, o botão "Next Level" continua disponível.
  const showNext = levelCelebrated && currentLevelIndex < levels.length - 1
  // O aluno pediu a resposta, então a explicação abre de novo.
  explanationCollapsed = false
  updateCollapseButton()
  if (count > 1) {
    showResult('info', `Answer loaded (solution ${(solutionIndex - 1) % count + 1} of ${count}). Click again for another way!`, showNext, solution, true)
  } else {
    showResult('info', 'Answer loaded. Read the explanation below to understand every property!', showNext, solution, true)
  }
}

function clearAnswer() {
  const level = levels[currentLevelIndex]
  editorInput.value = level.starterCSS
  currentCSS = level.starterCSS
  answerLoaded = false
  updateLineNumbers()
  updatePreview(previewFrame, level.html, currentCSS)
  updateAnswerButton()

  // O banner continua mostrando o acerto (sem efeitos novos) quando o nível
  // já estava resolvido, senão ele é escondido.
  if (levelCelebrated) {
    showLevelSuccess(level, false)
  } else {
    hideBanner()
  }
}

// O botão muda entre "Show Answer" e "Clear Answer" conforme o estado.
function updateAnswerButton() {
  if (answerLoaded) {
    btnAnswer.textContent = '\u2715 Clear Answer'
    btnAnswer.title = 'Remove the answer and bring back the starter code'
    btnAnswer.classList.add('loaded')
  } else {
    btnAnswer.textContent = 'Show Answer'
    btnAnswer.title = 'Load a solution into the editor'
    btnAnswer.classList.remove('loaded')
  }
}

// Recolhe o painel de explicação, deixando só o título visível.
function toggleExplanation() {
  explanationCollapsed = !explanationCollapsed
  explanationPanel.classList.toggle('explanation-collapsed', explanationCollapsed)
  updateCollapseButton()
}

function updateCollapseButton() {
  btnCollapseExplanation.innerHTML = explanationCollapsed ? '&#9656;' : '&#9662;'
  btnCollapseExplanation.title = explanationCollapsed
    ? 'Expand the explanation'
    : 'Shrink the explanation'
}

// Remove o painel de explicação. Ele volta a aparecer quando o aluno pede
// a resposta de novo (botão "Show Answer") ou resolve o nível.
function closeExplanation() {
  explanationPanel.classList.add('hidden')
}

function toggleReference() {
  referenceBody.innerHTML = cssReference.map(prop => `
    <div class="reference-item">
      <code class="reference-prop">${prop}</code>
    </div>
  `).join('')
  referenceModal.classList.toggle('hidden')
}

function closeReference() {
  referenceModal.classList.add('hidden')
}

function showResult(kind, message, showNext, detail, openPanel) {
  resultBanner.classList.remove('hidden', 'success', 'error', 'info')
  resultBanner.classList.add(kind)
  resultIcon.textContent = kind === 'success' ? '\u2713' : kind === 'error' ? '\u2717' : '\u2139'
  resultText.textContent = message

  // Sem explicação (erro) o painel continua como está, para o aluno não
  // perder o texto que já estava lendo.
  if (detail) {
    const scrollTop = explanationBody.scrollTop
    explanationBody.innerHTML = renderExplanation(detail)
    explanationBody.scrollTop = scrollTop
    // openPanel = false respeita o escolha do aluno (recolhido ou fechado).
    if (openPanel) {
      explanationPanel.classList.remove('hidden')
      explanationPanel.classList.toggle('explanation-collapsed', explanationCollapsed)
    }
  }

  const existingBtn = resultBanner.querySelector('.btn-next')
  if (existingBtn) existingBtn.remove()

  if (showNext) {
    const nextBtn = document.createElement('button')
    nextBtn.className = 'btn btn-next'
    nextBtn.textContent = 'Next Level \u2192'
    nextBtn.addEventListener('click', () => {
      loadLevel(currentLevelIndex + 1)
    })
    resultBanner.appendChild(nextBtn)
  }
}

// Monta a explicação detalhada: uma lista com o nome de cada elemento
// (seletor HTML ou propriedade CSS) e o que ele faz.
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
    ? `<p class="explanation-tip"><span class="explanation-tip-label">Key idea:</span> ${detail.tip}</p>`
    : ''

  return `<ul class="explanation-list">${items}</ul>${tip}`
}

function hideResult() {
  hideBanner()
  explanationPanel.classList.add('hidden')
  explanationPanel.classList.remove('explanation-collapsed')
  explanationBody.innerHTML = ''
  previewFrame.parentElement.classList.remove('success-glow', 'fail-flash')
  editorContainer.classList.remove('shake')
}

function hideBanner() {
  resultBanner.classList.add('hidden')
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

init()
