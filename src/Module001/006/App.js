import React from 'react';

import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Person name="Mavis" age="17" />
        <Person name="Lucy" age="16" />
        <Person name="Erza" age="19" />
      </div>
    );
  }
}

export default App;
