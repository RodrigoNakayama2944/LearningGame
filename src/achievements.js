// Achievement definitions for CSS Quest.
//
// Each achievement has a condition that receives a context object built by
// main.js. The condition only decides if the achievement should unlock; the
// save/unlock part is handled by progress.js.

import { worlds, BOSS_LEVEL_IDS } from './quest-map.js'

const worldClearText = {
  1: {
    en: ['Landing Page Repaired', 'Solve every level of The Landing Page.'],
    'pt-BR': ['Landing Page Consertada', 'Resolva todos os níveis da Landing Page.']
  },
  2: {
    en: ['Dashboard Online', 'Solve every level of The Dashboard.'],
    'pt-BR': ['Dashboard no Ar', 'Resolva todos os níveis do Dashboard.']
  },
  3: {
    en: ['App Shell Ready', 'Solve every level of The App Shell.'],
    'pt-BR': ['App Shell Pronto', 'Resolva todos os níveis do App Shell.']
  },
  4: {
    en: ['Design System Complete', 'Solve every level of The Design System.'],
    'pt-BR': ['Design System Completo', 'Resolva todos os níveis do Design System.']
  },
  5: {
    en: ['Final Interface Restored', 'Solve every level of The Final Interface.'],
    'pt-BR': ['Interface Final Restaurada', 'Resolva todos os níveis da Interface Final.']
  },
  6: {
    en: ['Component Library Built', 'Solve every level of The Component Library.'],
    'pt-BR': ['Biblioteca de Componentes', 'Resolva todos os níveis da Biblioteca de Componentes.']
  },
  7: {
    en: ['Responsive Studio Open', 'Solve every level of The Responsive Studio.'],
    'pt-BR': ['Estúdio Responsivo Aberto', 'Resolva todos os níveis do Estúdio Responsivo.']
  },
  8: {
    en: ['Master Layout Done', 'Solve every level of The Master Layout.'],
    'pt-BR': ['Layout Mestre Concluído', 'Resolva todos os níveis do Layout Mestre.']
  }
}

function finishedWithin(context, minutes) {
  return (
    context.completionTimeMs !== null &&
    context.completionTimeMs > 0 &&
    context.completionTimeMs < minutes * 60 * 1000
  )
}

function solveCountWithStars(context, stars) {
  return Object.values(context.progress.levels).filter(
    level => level.solved && (level.bestStars || 0) >= stars
  ).length
}

function allWorldLevelsSolved(context, worldId) {
  const world = worlds.find(item => item.id === worldId)
  if (!world) return false
  return world.levelIds.every(levelId => context.progress.levels[levelId]?.solved)
}

function worldAchievement(worldId) {
  const text = worldClearText[worldId]
  return {
    id: `worldCleared${worldId}`,
    title: { en: text.en[0], 'pt-BR': text['pt-BR'][0] },
    description: { en: text.en[1], 'pt-BR': text['pt-BR'][1] },
    check: context => allWorldLevelsSolved(context, worldId)
  }
}

export const achievements = [
  {
    id: 'firstSteps',
    title: { en: 'First Steps', 'pt-BR': 'Primeiros Passos' },
    description: {
      en: 'Solve your first level.',
      'pt-BR': 'Resolva o seu primeiro nível.'
    },
    check: context => context.solvedCount >= 1
  },
  {
    id: 'cleanCode',
    title: { en: 'Clean Code', 'pt-BR': 'Código Limpo' },
    description: {
      en: 'Earn 3 stars on any level.',
      'pt-BR': 'Ganhe 3 estrelas em qualquer nível.'
    },
    check: context => solveCountWithStars(context, 3) >= 1
  },
  {
    id: 'noHelpNeeded',
    title: { en: 'No Help Needed', 'pt-BR': 'Sem Ajuda' },
    description: {
      en: 'Earn 3 stars on five different levels.',
      'pt-BR': 'Ganhe 3 estrelas em cinco níveis diferentes.'
    },
    check: context => solveCountWithStars(context, 3) >= 5
  },
  {
    id: 'perfectionist',
    title: { en: 'Perfectionist', 'pt-BR': 'Perfeccionista' },
    description: {
      en: 'Earn 3 stars on every level.',
      'pt-BR': 'Ganhe 3 estrelas em todos os níveis.'
    },
    check: context =>
      context.solvedCount === context.totalLevels &&
      solveCountWithStars(context, 3) === context.totalLevels
  },
  {
    id: 'bossSlayer',
    title: { en: 'Boss Slayer', 'pt-BR': 'Caçador de Chefes' },
    description: {
      en: 'Defeat every boss level.',
      'pt-BR': 'Derrote todos os níveis chefe.'
    },
    check: context => BOSS_LEVEL_IDS.every(levelId => context.progress.levels[levelId]?.solved)
  },
  {
    id: 'comebackKid',
    title: { en: 'Comeback Kid', 'pt-BR': 'Volta por Cima' },
    description: {
      en: 'Solve a level after three wrong checks.',
      'pt-BR': 'Resolva um nível depois de três verificações erradas.'
    },
    check: context =>
      Boolean(context.lastRun && context.lastRun.correct && context.lastRun.wrongChecks >= 3)
  },
  {
    id: 'speedDemon',
    title: { en: 'Speed Demon', 'pt-BR': 'Velocidade Máxima' },
    description: {
      en: 'Solve a level in under one minute.',
      'pt-BR': 'Resolva um nível em menos de um minuto.'
    },
    check: context =>
      Boolean(context.lastRun && context.lastRun.correct &&
        context.lastRun.timeMs > 0 && context.lastRun.timeMs < 60000)
  },
  {
    id: 'dailyDevotee',
    title: { en: 'Daily Devotee', 'pt-BR': 'Devoto Diário' },
    description: {
      en: 'Complete the Daily Challenge seven days in a row.',
      'pt-BR': 'Complete o Desafio Diário por sete dias seguidos.'
    },
    check: context => (context.progress.daily.streak || 0) >= 7
  },
  {
    id: 'curiousMind',
    title: { en: 'Curious Mind', 'pt-BR': 'Mente Curiosa' },
    description: {
      en: 'Open ten different CSS Tags.',
      'pt-BR': 'Abra dez Tags CSS diferentes.'
    },
    check: context => context.progress.tagsOpened.length >= 10
  },
  {
    id: 'linguist',
    title: { en: 'Linguist', 'pt-BR': 'Poliglota' },
    description: {
      en: 'Play the game in both available languages.',
      'pt-BR': 'Jogue o jogo nos dois idiomas disponíveis.'
    },
    check: context => context.progress.languagesTried.length >= 2
  },
  {
    id: 'questComplete',
    title: { en: 'Quest Complete', 'pt-BR': 'Missão Cumprida' },
    description: {
      en: 'Solve all thirty levels.',
      'pt-BR': 'Resolva todos os trinta níveis.'
    },
    check: context => context.solvedCount >= context.totalLevels
  },
  {
    id: 'speedrunner',
    title: { en: 'Speedrunner', 'pt-BR': 'Speedrunner' },
    description: {
      en: 'Complete all thirty levels in under 60 minutes.',
      'pt-BR': 'Conclua os trinta níveis em menos de 60 minutos.'
    },
    check: context => finishedWithin(context, 60)
  },
  {
    id: 'turboRunner',
    title: { en: 'Turbo Runner', 'pt-BR': 'Corredor Turbo' },
    description: {
      en: 'Complete all thirty levels in under 30 minutes.',
      'pt-BR': 'Conclua os trinta níveis em menos de 30 minutos.'
    },
    check: context => finishedWithin(context, 30)
  },
  {
    id: 'lightningRunner',
    title: { en: 'Lightning Runner', 'pt-BR': 'Corredor Relâmpago' },
    description: {
      en: 'Complete all thirty levels in under 15 minutes.',
      'pt-BR': 'Conclua os trinta níveis em menos de 15 minutos.'
    },
    check: context => finishedWithin(context, 15)
  },
  {
    id: 'skeletonSeen',
    secret: true,
    title: { en: 'The Skeleton Is Loose', 'pt-BR': 'O Esqueleto Solto' },
    description: {
      en: 'Catch the running skeleton crossing your screen.',
      'pt-BR': 'Pegue o esqueleto correndo atravessar a sua tela.'
    },
    check: context => Boolean(context.progress.skeletonSeen)
  },
  worldAchievement(1),
  worldAchievement(2),
  worldAchievement(3),
  worldAchievement(4),
  worldAchievement(5),
  worldAchievement(6),
  worldAchievement(7),
  worldAchievement(8)
]

export function getAchievementText(achievement, language) {
  return {
    title: achievement.title[language] || achievement.title.en,
    description: achievement.description[language] || achievement.description.en
  }
}
