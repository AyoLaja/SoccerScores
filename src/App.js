import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "none",
      venueName: "none",
      founded: "none",
      website: "none",
      nickname: "none"
    }
  }

  render() {
    const apiKey = "b030f32c6a69418ca8fd984a5040d8b5";
    const url = `https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?&q={apiKey}`;

    fetch(url)
    .then(result => result.json())
    .then(data => this.setState({
      name: data.Teams[0].Name
    }))

    this.setState({
      founded: "Ayo"
    })

    return (
      <div>
        <p>{this.state.name}</p>

      </div>
    );
  }
}

export default App;
