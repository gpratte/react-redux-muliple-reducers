import React from 'react'
import store from '../league/leagueStore';
import {
  CHANGE_SEASON_COUNT
} from './seasonActions';

class Season extends React.Component {

  changeCount() {
    const num = new Date().getTime();
    store.dispatch({type: CHANGE_SEASON_COUNT, value: num})
  }

  render() {
    const season = this.props.season;
    return (
      <div>
        <h1>Season</h1>
        <input type={"text"} value={season.count} onChange={this.changeCount}/>
      </div>
    )
  }
}

export default Season
