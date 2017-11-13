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
      people: [],
      strings: []
    }
  }

  getData() {
    //fetch('https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=00be38b05fb4464c81e2a008d4b4e792')
    const promise = fetch('https://randomuser.me/api/?results=20')
      .then(response => {
        if (response.status >= 400) {
        throw `Response Invalid ( ${response.status} )`;
        return;
      }
      return response.json();
    })
    .then(({results}) => {
      this.setState({
        people: results
      })
    })
    .catch(error => {
      console.log(error);
    });

    return promise;
  }

  ComponenWillMount() {
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
          {people.map((person, i) => {
            return (
              <li key={person.name + i}>{person.name}</li>
              <li key={person.email + i}>{person.email }</li>
            );
          })
        </ul>
      </div>
    });
  }
}

export default App;
