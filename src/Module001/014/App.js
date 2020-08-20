import React from 'react';

import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      { name: 'Mavis', age: 17 },
      { name: 'Lucy', age: 16 },
      { name: 'Erza', age: 19 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Mavis', age: 18 },
        { name: newName, age: 16 },
        { name: 'Mirajane', age: 19 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Mavis', age: 18},
        {name: event.target.value, age: 16},
        {name: 'Mirajane', age: 19}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'Ultear')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Ultear!')}
          changed={this.nameChangedHandler}
          >Magic: Celestial Magic</Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          />
      </div>
    );
  }
}

export default App;
