import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import './App.css';

class App extends Component {
	render() {
  		console.log("Rerendering app")
    	return (
        	<LoginContainer />
    	);
  	}
}

export default App;
