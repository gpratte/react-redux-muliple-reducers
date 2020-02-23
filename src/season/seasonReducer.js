import {
  CHANGE_SEASON_COUNT
} from './seasonActions'

function seasonReducer(season, action) {
  //console.log('season reducer is ' + JSON.stringify(season) + ' action ' + JSON.stringify(action));

  switch (action.type) {
    case CHANGE_SEASON_COUNT:
      const seasonCopy = Object.assign({}, season)
      seasonCopy.count = action.value;
      return seasonCopy;
    default:
      return season;
  }
}

export default seasonReducer
