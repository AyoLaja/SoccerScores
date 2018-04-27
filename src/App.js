import React, { Component } from 'react';
import './App.css';
import players from './jsons/arsenalPlayer.json';
import ChooseTeam from './components/ChooseTeam';
import { Row, Col } from 'react-bootstrap';

class App extends Component {
  // getData() {
  //   //fetch('https://api.fantasydata.net/v3/soccer/stats/json/PlayersByTeam/509?subscription-key=xxxxxxxxx')
  //}

  render() {
    return(
      <div className="container">
        <div className="logo-container">
          <img alt="Club Crest" src="https:\/\/upload.wikimedia.org\/wikipedia\/en\/thumb\/5\/53\/Arsenal_FC.svg\/200px-Arsenal_FC.svg.png"/>
        </div>
        <Row>
          <Col xs={2} md={2}>
            <ChooseTeam/>
          </Col>
          <Col xs={7} md={7}>
            <Row>
              <Col className="text-left">
                <h3>Players</h3>
              </Col>
            </Row>
            <ul className="player-list">
              {
                players.Names.map((players) => {
                  return (
                    <li className="list-element" key={players.PlayerId}>
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
                              <img alt="Player Photo" src={players.PhotoUrl}/>
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
          </Col>
          <Col xs={3} md={3}>
            <Row className="text-left">
              <Col md={12}>
                <h3>Results & Fixtures</h3>
              </Col>
            </Row>
            <Row>
              <div className="fixtures-container">
                <Row className="text-left">
                  <Col xs={12} md={12}>
                    <span className="game-date deets">{players.Game.Day}</span>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <span className="game-opponents deets">{players.Game.AwayTeamKey} @{players.Game.HomeTeamKey}</span><br/>
                    <span className="game-scores deets">{players.Game.AwayTeamScore} - {players.Game.HomeTeamScore}</span>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    )};
}

export default App;
