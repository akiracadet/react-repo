import React from 'react';
import { useState } from 'react';

import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Mavis", age: 17},
      {name: "Lucy", age: 16},
      {name: "Erza", age: 19}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Mavis", age: 18},
        {name: "Lucy", age: 16},
        {name: "Mirajane", age: 19}
      ],
    });
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Magic: Celestial Magic</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     persons: [
//       { name: 'Mavis', age: 17 },
//       { name: 'Lucy', age: 16 },
//       { name: 'Erza', age: 19 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = () => {
//     this.setState({
//       persons: [
//         { name: 'Mavis', age: 18 },
//         { name: 'Lucy', age: 16 },
//         { name: 'Mirajane', age: 19 }
//       ]
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Magic: Celestial Magic</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//   }
// }

// export default App;
