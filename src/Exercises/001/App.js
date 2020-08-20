import React from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';

class App extends React.Component {
  state = {
    usernames: [
      {'username': 'Mavis'},
      {'username': 'Lucy'},
      {'username': 'Erza'}
    ]
  };

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.usernames[0].username} />
        <UserOutput username={this.state.usernames[1].username} />
        <UserOutput username={this.state.usernames[2].username} />
      </div>
    );
  }
}

export default App;
