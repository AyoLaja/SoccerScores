import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }

    this.getData = this.getData.bind(this);
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
      return results;
    })
    .catch(error => {
      console.log(error);
    });

    return promise;
  }

  ComponenDidMount() {
    /*const apiKey = '00be38b05fb4464c81e2a008d4b4e792';
    //const url = `https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key={apiKey}`;
    const url = 'https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=' + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      name: 'ayo'
    }))*/

    this.getData()
      .then(data => {
        this.setState({
          people: data
        });
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.people.results[0].gender}</p>
      </div>
    );
  }
}

export default App;
