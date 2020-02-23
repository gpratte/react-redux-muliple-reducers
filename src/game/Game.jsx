import React from 'react'
import store from '../league/leagueStore';
import {
  CHANGE_GAME_COUNT
} from './gameActions';

class Game extends React.Component {

  changeCount() {
    const num = new Date().getTime();
    store.dispatch({type: CHANGE_GAME_COUNT, value: num})
  }

  render() {
    const game = this.props.game;
    return (
      <div>
        <h1>Game</h1>
        <input type={"text"} value={game.count} onChange={this.changeCount}/>
      </div>
    )
  }
}

export default Game
