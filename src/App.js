import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'none',
      venueName: 'none',
      founded: 'none',
      website: 'none',
      nickname: 'none'
    }
  }

  ComponentDidMount() {
    //const apiKey = 'b030f32c6a69418ca8fd984a5040d8b5';
    //const url = `https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL/${apiKey}`;
    const url = 'https://api.darksky.net/forecast/ad38988aa88b4261594ade3c95519e5a/37.8267,-122.4233';

    fetch(url, {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(result => result.json())
    .then(result => this.setState({
      name: result
    }))
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

export default App;
