import {createStore} from 'redux'
import reducer from './leagueReducer'

const league = {
  token: null,
  game: {
    count: 0
  },
  season: {
    count: 0
  }
}

const store = createStore(reducer, league);

export default store;
