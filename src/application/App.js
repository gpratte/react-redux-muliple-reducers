import './App.css';
import React from 'react';
import LeagueConnection from '../league/leagueConnector'

class App extends React.Component {

  render() {
    return (
      <div>
        <LeagueConnection/>
      </div>
    );
  }
}

export default App;
