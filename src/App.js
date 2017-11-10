import React, { Component } from 'react';
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
    const apiKey = '00be38b05fb4464c81e2a008d4b4e792';
    //const url = `https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key={apiKey}`;
    const url = 'https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=' + apiKey;
    //const url = 'https://api.darksky.net/forecast/ad38988aa88b4261594ade3c95519e5a/37.8267,-122.4233';

    console.log(apiKey)
    this.setState({
      website: 'ayo.com'
    })
    /*fetch(url, {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    })*/
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      name: 'ayo'
    }))
  }

  render() {
    return (
      <div>
        <p>{this.state.name}, {this.state.website}</p>
      </div>
    );
  }
}

export default App;
