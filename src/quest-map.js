// Campaign structure and scoring rules for CSS Quest.
//
// The worlds are only metadata: the puzzles themselves live in levels.js.
// Keeping this data separate means the map, the achievements and the HUD
// can all use the same numbers without touching the level content.

export const STAR_XP = 10
const MAX_STARS_PER_LEVEL = 3

export const worlds = [
  {
    id: 1,
    nameKey: 'world1Name',
    subtitleKey: 'world1Subtitle',
    levelIds: [1, 2, 3, 4]
  },
  {
    id: 2,
    nameKey: 'world2Name',
    subtitleKey: 'world2Subtitle',
    levelIds: [5, 6, 7, 8]
  },
  {
    id: 3,
    nameKey: 'world3Name',
    subtitleKey: 'world3Subtitle',
    levelIds: [9, 10, 11, 12]
  },
  {
    id: 4,
    nameKey: 'world4Name',
    subtitleKey: 'world4Subtitle',
    levelIds: [13, 14, 15, 16]
  },
  {
    id: 5,
    nameKey: 'world5Name',
    subtitleKey: 'world5Subtitle',
    levelIds: [17, 18, 19, 20]
  },
  {
    id: 6,
    nameKey: 'world6Name',
    subtitleKey: 'world6Subtitle',
    levelIds: [21, 22, 23, 24]
  },
  {
    id: 7,
    nameKey: 'world7Name',
    subtitleKey: 'world7Subtitle',
    levelIds: [25, 26, 27, 28]
  },
  {
    id: 8,
    nameKey: 'world8Name',
    subtitleKey: 'world8Subtitle',
    levelIds: [29, 30]
  }
]

export const BOSS_LEVEL_IDS = [4, 8, 12, 16, 20, 24, 28, 30]
const TOTAL_LEVELS = worlds.reduce((total, world) => total + world.levelIds.length, 0)
export const MAX_STARS = TOTAL_LEVELS * MAX_STARS_PER_LEVEL
export const MAX_XP = MAX_STARS * STAR_XP

// The thresholds are percentages of the maximum XP, so they still work if
// more levels are added later.
const RANKS = [
  { key: 'rankNovice', percent: 0 },
  { key: 'rankApprentice', percent: 0.1 },
  { key: 'rankStylist', percent: 0.3 },
  { key: 'rankKnight', percent: 0.55 },
  { key: 'rankMaster', percent: 0.8 },
  { key: 'rankLegend', percent: 1 }
]

export function isBossLevel(levelId) {
  return BOSS_LEVEL_IDS.includes(levelId)
}

export function getWorldForLevel(levelId) {
  return worlds.find(world => world.levelIds.includes(levelId)) || worlds[0]
}

export function getWorldNameKey(levelId) {
  return getWorldForLevel(levelId).nameKey
}

// Returns the rank reached with the current XP.
export function getRank(xp) {
  const safeXp = Math.max(0, Math.min(MAX_XP, xp || 0))
  let index = 0
  for (let i = 0; i < RANKS.length; i++) {
    if (safeXp >= Math.floor(MAX_XP * RANKS[i].percent)) index = i
  }

  return { key: RANKS[index].key }
}
