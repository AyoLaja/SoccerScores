import React, { Component } from 'react';
import './App.css';
import players from './arsenalPlayer.json';
import ChooseTeam from './ChooseTeam';
import { Button, Grid, Row, Col } from 'react-bootstrap'; 

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
        <div className="logo-container">
          <img src="https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/5\/53\/Arsenal_FC.svg\/200px-Arsenal_FC.svg.png" />
        </div>
        <Row className="text-left">
          <Col xs={12} md={12}>
            <ChooseTeam/>
          </Col>
        </Row>
        <ul className="player-list">
          {
            players.map((players) => {
              return (
                <li className="list-element">
                  <div>
                    <Row>
                      <Col xs={12} md={12}>
                        <span className="player-name">{players.CommonName}</span>
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col>
                        <div className="img-container">
                          <img src={players.PhotoUrl}/>
                          <div className="player-image"></div>
                        </div>
                      </Col>
                    </Row>
                    <hr/>
                    <Row>
                      <Col xs={6} md={6}>
                        <label>Nationality: <span className="player-nationality deets">{players.Nationality.split("", 3)}</span></label>
                      </Col>
                      <Col xs={6} md={6}>
                        <label>Jersey No: <span className="player-jersey deets">{players.Jersey}</span></label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                        <label>Position: <span className="player-position deets">{players.Position}</span></label>
                      </Col>
                      <Col xs={6} md={6}>
                        <label>Foot: <span className="player-position deets">{players.Foot}</span></label>
                      </Col>
                    </Row>
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
