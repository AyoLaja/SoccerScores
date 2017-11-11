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
      nickname: 'none',
      people: []
    }
  }

  getData() {
    //fetch('https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=00be38b05fb4464c81e2a008d4b4e792')
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => this.setState({
      people: data.results
    }))
  }

  ComponentDidMount() {
    /*const apiKey = '00be38b05fb4464c81e2a008d4b4e792';
    //const url = `https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key={apiKey}`;
    const url = 'https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      name: 'ayo'
    }))*/

    this.getData();
  }



  render() {
    this.getData();

    return (
      <div>
        <ul>
          {this.state.people.map((item) => {
            return (
              <li>{item[0].name}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
