import React from 'react';

import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Person />
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
