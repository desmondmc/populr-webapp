import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import { store } from './index'
import './App.css'

class App extends Component {
	constructor() {
		super()
		store.subscribe(() => {
			console.log(store.getState())
		})
	}

	render() {
    	return (
        	<LoginContainer />
    	);
  	}
}

export default App;
