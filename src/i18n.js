// Motor de tradução do CSS Quest.
//
// O jogo guarda o idioma atual em uma variável e os textos de cada idioma
// em dicionários. As funções abaixo traduzem a interface (t), o conteúdo
// dos níveis (getLevelText) e o guia de tags CSS (getTagText).

import { levelTranslationsPtBR } from './levels-pt-BR.js'
import { tagTranslationsPtBR } from './tags-pt-BR.js'

// Idiomas disponíveis no botão de escolha de idioma.
export const languages = [
  { code: 'en', name: 'English' },
  { code: 'pt-BR', name: 'Português (BR)' }
]

// Chave usada para guardar o idioma escolhido no navegador.
export const LANGUAGE_KEY = 'cssquest-language'

// Textos da interface (botões, banners, títulos) em cada idioma.
const uiText = {
  en: {
    subtitle: 'Learn CSS by Playing',
    editorLabel: 'Write your CSS here',
    hintLabel: 'Hint:',
    checkAnswer: 'Check Answer',
    reset: 'Reset',
    showHint: 'Show Hint',
    hideHint: 'Hide Hint',
    cssTags: 'CSS Tags',
    howItWorks: 'How it works:',
    livePreview: 'Live Preview',
    target: 'Target',
    updating: 'Updating...',
    live: 'Live',
    nextLevel: 'Next Level →',
    levelBadge: 'Level {n}',
    tagsTitle: 'CSS Tags',
    tagsIntro: 'Click a tag to see what it does, the most common values and an example.',
    commonValues: 'Common values',
    keyIdea: 'Key idea',
    languageButton: 'Language',
    shrinkExplanation: 'Shrink the explanation',
    expandExplanation: 'Expand the explanation',
    removeExplanation: 'Remove the explanation',
    resultSuccess: 'Correct! Well done!',
    resultLastLevel: 'You completed all levels!',
    resultError: 'Not quite right. Try again!'
  },
  'pt-BR': {
    subtitle: 'Aprenda CSS Jogando',
    editorLabel: 'Escreva seu CSS aqui',
    hintLabel: 'Dica:',
    checkAnswer: 'Verificar Resposta',
    reset: 'Reiniciar',
    showHint: 'Mostrar Dica',
    hideHint: 'Esconder Dica',
    cssTags: 'Tags CSS',
    howItWorks: 'Como funciona:',
    livePreview: 'Prévia ao Vivo',
    target: 'Alvo',
    updating: 'Atualizando...',
    live: 'Ao vivo',
    nextLevel: 'Próximo Nível →',
    levelBadge: 'Nível {n}',
    tagsTitle: 'Tags CSS',
    tagsIntro: 'Clique em uma tag para ver o que ela faz, os valores mais comuns e um exemplo.',
    commonValues: 'Valores comuns',
    keyIdea: 'Ideia principal',
    languageButton: 'Idioma',
    shrinkExplanation: 'Recolher a explicação',
    expandExplanation: 'Expandir a explicação',
    removeExplanation: 'Remover a explicação',
    resultSuccess: 'Correto! Muito bem!',
    resultLastLevel: 'Você terminou todos os níveis!',
    resultError: 'Ainda não é isso. Tente de novo!'
  }
}

// Idioma atual do jogo.
let currentLanguage = 'en'

export function getLanguage() {
  return currentLanguage
}

// Troca o idioma atual. Se o código não existir, volta para inglês.
export function setLanguage(code) {
  currentLanguage = languages.some(language => language.code === code) ? code : 'en'
}

// Traduz uma chave da interface. Os {nome} são trocados pelos valores
// que vierem em params.
export function t(key, params = {}) {
  const table = uiText[currentLanguage] || uiText.en
  let text = table[key] || uiText.en[key] || key
  Object.keys(params).forEach(name => {
    text = text.split(`{${name}}`).join(params[name])
  })
  return text
}

// Nome do idioma atual, usado no botão de escolha de idioma.
export function getLanguageName() {
  const language = languages.find(item => item.code === currentLanguage)
  return language ? language.name : languages[0].name
}

// Devolve o nível com o texto do idioma atual. O código CSS e a função
// validate continuam iguais em todos os idiomas.
export function getLevelText(level) {
  if (currentLanguage !== 'pt-BR') return level

  const translation = levelTranslationsPtBR[level.id]
  if (!translation) return level

  return {
    ...level,
    title: translation.title,
    description: translation.description,
    hint: translation.hint,
    starterCSS: translation.starterCSS,
    solutions: level.solutions.map((solution, index) => ({
      css: solution.css,
      explanation: (translation.solutions[index] && translation.solutions[index].explanation) || solution.explanation,
      tip: (translation.solutions[index] && translation.solutions[index].tip) || solution.tip
    }))
  }
}

// Devolve a tag do guia de CSS com o texto do idioma atual.
// Os valores CSS e o exemplo de código não são traduzidos.
export function getTagText(item) {
  if (currentLanguage !== 'pt-BR') return item

  const translation = tagTranslationsPtBR[item.tag]
  if (!translation) return item

  return {
    ...item,
    group: translation.group || item.group,
    summary: translation.summary || item.summary,
    details: translation.details || item.details
  }
}
