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

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      name: 'ayo'
    }))
  }

  getData() {
    fetch('https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=00be38b05fb4464c81e2a008d4b4e792')
    .then(response => response.json())
    .then(data => this.setState({
      founded: data.Teams[0].Phone
    }))
  }

  render() {
    return (
      <div>
      <p>{this.getData()}</p>
        <p>{this.state.name}, {this.state.website}</p>
      </div>
    );
  }
}

export default App;
