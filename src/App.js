import React, { Component } from 'react';
import './App.css';
import players from './arsenalPlayer.json';

class App extends Component {
  // getData() {
  //   //fetch('https://api.fantasydata.net/v3/soccer/stats/json/PlayersByTeam/509?subscription-key=00be38b05fb4464c81e2a008d4b4e792')
  //
  //}

  getData() {
    console.log(players);
  }

  render() {
    return(
      <div className="container">
        <h1>Arsenal Players</h1>
        {this.getData()}
        <ul className="player-list">
          {
            players.map((players) => {
              return (
                <li className="list-element">
                {players.CommonName} <br/>
                <span className="img-container"><img src={players.PhotoUrl}/></span><br/>
                <span>{players.Nationality}</span><br/>
                <span>{players.Jersey}</span><br/>
                <span>{players.Position}</span><br/>
                </li>
              );
            })
          }
        </ul>
      </div>
    )};
}

export default App;
