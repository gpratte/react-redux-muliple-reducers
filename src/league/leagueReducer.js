import gameReducer from './gameReducer'
import seasonReducer from './seasonReducer'

function reducer(league, action) {
  //console.log('reducer league is ' + JSON.stringify(league) + ' action ' + JSON.stringify(action));

  return {
    token: league.token,
    game: gameReducer(league.game, action),
    season: seasonReducer(league.season, action)
  }
}

export default reducer
