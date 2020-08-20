import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
  render() {
    return (
      <div className="UserInput">
        <input type="text" onChange={this.props.event}/>
      </div>
    );
  }
}

export default UserInput;
