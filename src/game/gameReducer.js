import {
  CHANGE_GAME_COUNT,
} from './gameActions'

function gameReducer(game, action) {
  //console.log('game reducer is ' + JSON.stringify(game) + ' action ' + JSON.stringify(action));

  switch (action.type) {
    case CHANGE_GAME_COUNT:
      const gameCopy = Object.assign({}, game)
      gameCopy.count = action.value;
      return gameCopy;
    default:
      return game;
  }
}

export default gameReducer
