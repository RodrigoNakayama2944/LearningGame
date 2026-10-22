import levels, { cssTagsGuide } from './levels.js'
import { updatePreview, updateTarget } from './preview.js'
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
const btnTags = document.getElementById('btnTags')
const tagsModal = document.getElementById('tagsModal')
const tagsBody = document.getElementById('tagsBody')
const tagsClose = document.getElementById('tagsClose')
const btnLanguage = document.getElementById('btnLanguage')
const languageMenu = document.getElementById('languageMenu')

let currentLevelIndex = 0
let completedLevels = new Set()
let currentCSS = ''
// Evita repetir a celebração (partículas, flash e carimbo) quando o aluno
// clica em "Check Answer" de novo no mesmo nível.
let levelCelebrated = false
// Estado do painel de explicação: recolhido (só o título) ou fechado (some).
let explanationCollapsed = false
// Último resultado mostrado no banner, guardado para poder ser traduzido
// de novo quando o aluno troca de idioma.
let lastResult = null
// Verdadeiro quando o preview já terminou de atualizar.
let previewIsLive = false

function init() {
  // O idioma escolhido fica guardado no navegador do aluno.
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY)
  if (savedLanguage) setLanguage(savedLanguage)

  buildLevelNav()
  loadLevel(0)
  setupEventListeners()
  applyLanguage()
}

function buildLevelNav() {
  levelNav.innerHTML = ''
  levels.forEach((level, index) => {
    const dot = document.createElement('button')
    dot.className = 'level-dot'
    dot.textContent = level.id
    dot.title = getLevelText(level).title
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
  levelCelebrated = false
  explanationCollapsed = false
  const level = levels[index]
  const text = getLevelText(level)

  levelBadge.textContent = t('levelBadge', { n: level.id })
  challengeTitle.textContent = text.title
  challengeDescription.textContent = text.description
  hintText.textContent = text.hint
  hintBox.classList.remove('visible')
  closeTagsGuide()

  currentCSS = text.starterCSS
  editorInput.value = text.starterCSS
  updateLineNumbers()

  updatePreview(previewFrame, level.html, text.starterCSS)
  updateTarget(targetFrame, level.html, text.solutions[0].css)
  targetWrapper.classList.add('visible')

  hideResult()
  updateLevelNav()
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
  btnTags.addEventListener('click', toggleTagsGuide)
  btnCollapseExplanation.addEventListener('click', toggleExplanation)
  btnCloseExplanation.addEventListener('click', closeExplanation)
  tagsClose.addEventListener('click', closeTagsGuide)
  tagsModal.addEventListener('click', (e) => {
    if (e.target === tagsModal) closeTagsGuide()
  })
  btnLanguage.addEventListener('click', toggleLanguageMenu)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-picker')) closeLanguageMenu()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTagsGuide()
      closeLanguageMenu()
    }
  })
}

function onEditorInput() {
  currentCSS = editorInput.value
  updateLineNumbers()
  updatePreview(previewFrame, levels[currentLevelIndex].html, currentCSS)
  previewIsLive = false
  previewStatus.textContent = t('updating')
  clearTimeout(previewStatus._timeout)
  previewStatus._timeout = setTimeout(() => {
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

    showResult('error', 'resultError', false)
  }
}

function showLevelSuccess(level, celebrate) {
  const isLastLevel = currentLevelIndex >= levels.length - 1
  const messageKey = isLastLevel ? 'resultLastLevel' : 'resultSuccess'

  if (celebrate) {
    spawnParticles()
    previewFrame.parentElement.classList.add('success-glow')
    flashScreen('pass')
    applyStamp(previewFrame.parentElement, 'pass', 'Correct!')
  }

  // O painel de explicação só abre sozinho na primeira resposta correta.
  showResult('success', messageKey, !isLastLevel, getExplanationFor(level, currentCSS), celebrate, {}, { level, css: currentCSS })
}

// Escolhe a explicação que combina com o código escrito pelo aluno.
// Se ele usar a outra solução (ex.: Grid no nível 6), a explicação
// mostrada também é a da solução que ele escreveu.
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
  loadLevel(currentLevelIndex)
}

function toggleHint() {
  hintBox.classList.toggle('visible')
  updateHintButton()
}

// O botão mostra "Mostrar Dica" ou "Esconder Dica" conforme o estado.
function updateHintButton() {
  btnHint.textContent = hintBox.classList.contains('visible') ? t('hideHint') : t('showHint')
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
    ? t('expandExplanation')
    : t('shrinkExplanation')
  btnCollapseExplanation.setAttribute('aria-label', btnCollapseExplanation.title)
}

// Remove o painel de explicação. Ele volta a aparecer quando o aluno
// resolve o nível.
function closeExplanation() {
  explanationPanel.classList.add('hidden')
}

// Abre e fecha o guia de tags CSS. O conteúdo é montado de novo a cada
// abertura, então o aluno sempre começa com todas as tags fechadas.
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

// Monta a lista de tags agrupada por tema. Cada tag vira um botão que
// abre e fecha a sua própria explicação.
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

// Abre ou fecha a explicação de uma tag.
function toggleTagDetail(header) {
  const detail = header.parentElement.querySelector('.tag-detail')
  const isOpen = !detail.classList.contains('hidden')
  detail.classList.toggle('hidden', isOpen)
  header.classList.toggle('open', !isOpen)
  header.setAttribute('aria-expanded', String(!isOpen))
}

// Escapa os caracteres do HTML para o exemplo de código não ser
// interpretado como marcação.
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function showResult(kind, messageKey, showNext, detail, openPanel, params = {}, context = {}) {
  resultBanner.classList.remove('hidden', 'success', 'error', 'info')
  resultBanner.classList.add(kind)
  resultIcon.textContent = kind === 'success' ? '\u2713' : kind === 'error' ? '\u2717' : '\u2139'
  resultText.textContent = t(messageKey, params)

  // O último resultado fica guardado para ser traduzido de novo quando o
  // aluno troca de idioma. Guardamos o nível e o CSS (e não o texto já
  // escrito) para conseguir refazer a explicação no novo idioma.
  lastResult = {
    kind,
    messageKey,
    showNext,
    detail,
    openPanel,
    params,
    level: context.level,
    css: context.css
  }

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
    nextBtn.textContent = t('nextLevel')
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
    ? `<p class="explanation-tip"><span class="explanation-tip-label">${t('keyIdea')}:</span> ${detail.tip}</p>`
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

// Abre e fecha o menu de escolha de idioma.
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

// Monta o menu com um botão para cada idioma. O idioma atual fica
// marcado com um visto.
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

// Troca o idioma do jogo e guarda a escolha no navegador.
function changeLanguage(code) {
  if (code === getLanguage()) {
    closeLanguageMenu()
    return
  }

  // Se o aluno ainda não mexeu no código, o código inicial também é
  // traduzido (os comentários dentro do CSS).
  const previousStarter = getLevelText(levels[currentLevelIndex]).starterCSS
  const editorHasStarter = editorInput.value.trim() === previousStarter.trim()

  setLanguage(code)
  localStorage.setItem(LANGUAGE_KEY, code)
  closeLanguageMenu()
  applyLanguage(editorHasStarter)
}

// Aplica o idioma atual em toda a interface: textos fixos, botões,
// nível atual, explicação, banner e guia de tags CSS.
function applyLanguage(editorHasStarter = true) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n)
  })

  // O idioma da página também muda, para o leitor de tela usar a voz certa.
  document.documentElement.lang = getLanguage()

  btnLanguage.textContent = getLanguageName()
  btnLanguage.title = t('languageButton')
  btnCloseExplanation.title = t('removeExplanation')
  btnCloseExplanation.setAttribute('aria-label', t('removeExplanation'))
  refreshLevelNav()
  refreshLevelText()
  updateCollapseButton()
  updateHintButton()
  previewStatus.textContent = previewIsLive ? t('live') : t('updating')

  if (editorHasStarter) {
    const text = getLevelText(levels[currentLevelIndex])
    editorInput.value = text.starterCSS
    currentCSS = text.starterCSS
    updateLineNumbers()
    updatePreview(previewFrame, levels[currentLevelIndex].html, currentCSS)
  }

  // O banner e a explicação são redesenhados no novo idioma.
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
      { level: lastResult.level, css: lastResult.css }
    )
  }

  if (!tagsModal.classList.contains('hidden')) {
    renderTagsGuide()
  }
}

// Recria os botões dos níveis com o título no idioma atual.
function refreshLevelNav() {
  buildLevelNav()
  updateLevelNav()
}

// Atualiza os textos do nível atual sem mexer no código do aluno.
function refreshLevelText() {
  const level = levels[currentLevelIndex]
  const text = getLevelText(level)

  levelBadge.textContent = t('levelBadge', { n: level.id })
  challengeTitle.textContent = text.title
  challengeDescription.textContent = text.description
  hintText.textContent = text.hint
}

init()
