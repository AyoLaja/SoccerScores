import React, { Component } from 'react';
import './App.css';
import players from './arsenalPlayer.json';

class App extends Component {
  // getData() {
  //   //fetch('https://api.fantasydata.net/v3/soccer/stats/json/PlayersByTeam/509?subscription-key=00be38b05fb4464c81e2a008d4b4e792')
  //
  //}
  //
  // getData() {
  //   console.log(players);
  // }

  render() {
    return(
      <div className="container">
        <h1>Arsenal Players</h1>
        <ul className="player-list">
          {
            players.map((players) => {
              return (
                <li className="list-element">
                <div>
                  <span className="player-name">{players.CommonName}</span> <br/>
                  <div className="img-container">
                    <span className="player-image"><img src={players.PhotoUrl}/></span><br/>
                  </div>
                  <hr/>
                  <div>
                    <label>Nationality: <span className="player-nationality deets">{players.Nationality}</span></label>
                    <label>Jersey No: <span className="player-jersey deets">{players.Jersey}</span></label><br/>
                    <label>Position: <span className="player-position deets">{players.Position}</span></label>
                    <label>Foot: <span className="player-position deets">{players.Foot}</span></label><br/>
                  </div>
                </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    )};
}

export default App;
