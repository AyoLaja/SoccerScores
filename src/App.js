import React, { Component } from 'react';
import './App.css';
import players from './arsenalPlayer.json';
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
          <Col xs={8} md={8} className="text-left">
            <Row>
              <Col className="text-left">
                <h3>Players</h3>
              </Col>
            </Row>
            <ul className="player-list">
              {
                players.map((players) => {
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
                              <img alt="Player Phtoto" src={players.PhotoUrl}/>
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
          <Col xs={2} md={2}>
            <Row>
              <Col md={12} className="text-left">
                <h3>Fixtures</h3>
              </Col>
            </Row>
            <Row>

            </Row>
          </Col>
        </Row>
      </div>
    )};
}

export default App;
