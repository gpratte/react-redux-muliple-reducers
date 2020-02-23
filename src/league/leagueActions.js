
export const CHANGE_GAME_COUNT = 'CHANGE_GAME_COUNT'
export const CHANGE_SEASON_COUNT = 'CHANGE_SEASON_COUNT'

export function changeGameCount(value) {
  return { type: CHANGE_GAME_COUNT, value }
}
export function changeSeasonCount(value) {
  return { type: CHANGE_SEASON_COUNT, value }
}
