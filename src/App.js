import React, { Component } from 'react';
import Onboarding from './Onboarding';
import './App.css';

class App extends Component {
  render() {
  	console.log("Rerendering app")
    return (
        <Onboarding />
    );
  }
}

export default App;
