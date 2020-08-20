import React from 'react';

import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Mavis', age: 17 },
      { name: 'Lucy', age: 16 },
      { name: 'Erza', age: 19 }
    ]
  }

  render() {
    return (
      <div className="App">
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Magic: Celestial Magic</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
