import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
    //fetch('https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=00be38b05fb4464c81e2a008d4b4e792')

    fetch('https://randomuser.me/api/?results=20')
    .then(response => {
      if(!response.ok) {
        throw Error("Network Request Failed")
      }
      return response
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        info: data.info,
        people: data.results
      })
    }, () => {
      this.setState({
        requestFailed: true
      })
    })
  }

  componentDidMount() {
    /*const apiKey = '00be38b05fb4464c81e2a008d4b4e792';
    //const url = `https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key={apiKey}`;
    const url = 'https://api.fantasydata.net/v3/soccer/scores/json/CompetitionDetails/EPL?subscription-key=' + apiKey;*/

    this.getData()
  }

  render() {
    if(this.state.requestFailed)return <p>Failed</p>
    if(!this.state.people) return <p>Loading...</p>
    return (
      <div>
        <ul>{this.state.people.map((user) =>
              <li key={user.email}>{user.login.username} - {user.name.first} {user.name.last}</li>
            )}
        </ul>
      </div>
    );
  }
}

export default App;
