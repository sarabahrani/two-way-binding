import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './components/style.css';

class App extends Component {
  state = {
    userName: "sara"
  }

  changeInputHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }
  render() {
    return (
      <div className="container" >
        <UserInput change={this.changeInputHandler} class="border" />
        <UserOutput userName={this.state.userName}> I love my Tar, Shahnaz khan </UserOutput>
        <UserOutput className="border user"> I like to play it like Shahnaz khan </UserOutput>
      </div>
    );
  }
};

export default App;
