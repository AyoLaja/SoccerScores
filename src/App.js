import React, { Component } from 'react';
import './App.css';
import players from './arsenalPlayer.json';
import ChooseTeam from './components/ChooseTeam';
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
  // chelsea 511 = https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/c\/cc\/Chelsea_FC.svg\/209px-Chelsea_FC.svg.png
  // liverpool 515= https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/0\/0c\/Liverpool_FC.svg\/370px-Liverpool_FC.svg.png
  // city 516= https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/e\/eb\/Manchester_City_FC_badge.svg\/410px-Manchester_City_FC_badge.svg.png
  // United 517 = https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/7\/7a\/Manchester_United_FC_crest.svg\/296px-Manchester_United_FC_crest.svg.png
  // Tottenham 524 = https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/b\/b4\/Tottenham_Hotspur.svg\/321px-Tottenham_Hotspur.svg.png

  render() {
    return(
      <div className="container">
        <div className="logo-container">
          <img src="https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/5\/53\/Arsenal_FC.svg\/200px-Arsenal_FC.svg.png"/>
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
                      <Col xs={8} md={8} className="fixed-top">
                        <span className="player-name">{players.CommonName}</span>
                      </Col>
                      <Col xs={4} md={4} className="text-right fixed-top">
                        <span className="player-jersey deets">{players.Jersey}</span>
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
                    <Row className="text-center">
                      <Col xs={4} md={4}>
                        <label>Nat: </label><br/><span className="player-nationality deets">{players.Nationality.split("", 3)}</span>
                      </Col>
                      <Col xs={4} md={4}>
                        <label>Position: </label><br/><span className="player-position deets">{players.Position}</span>
                      </Col>
                      <Col xs={4} md={4}>
                        <label>Foot: </label><br/><span className="player-position deets">{players.Foot.split("", 1)}</span>
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
