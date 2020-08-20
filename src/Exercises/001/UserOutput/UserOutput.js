import React from 'react';
import './UserOutput.css';

import UserInput from '../UserInput/UserInput.js';

class UserOutput extends React.Component {
  state = {
    username: this.props.username
  }

  changeUsername = (event) => {
    this.setState({username: event.target.value});
  };

  render() {
    return (
      <div className="UserOutput">
        <p>username: {this.state.username}</p>

        <UserInput event={this.changeUsername.bind(this)} />
      </div>
    );
  }
}

export default UserOutput;
