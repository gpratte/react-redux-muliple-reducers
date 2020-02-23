import React from 'react'
import Game from '../game/Game'
import Season from '../season/Season'

class League extends React.Component {
  render() {
    return (
    <div>
      <Game token={this.props.league.token} game={this.props.league.game}/>
      <Season token={this.props.league.token} season={this.props.league.season}/>
    </div>
    )
  }
}

export default League
