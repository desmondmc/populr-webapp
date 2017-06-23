import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer'
import { store } from './index'
import { updateUser } from './state/Action'
import { Cookies } from './utils/Cookies'
import './App.css'

class App extends Component {
	constructor() {
		super()

		const userCookie = Cookies.user()

		if (userCookie != null) {
			console.log("userCookie: " + userCookie)
			const action = updateUser(userCookie)
        	store.dispatch(action)
    	}	

		store.subscribe(() => {
			console.log("State change!")
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
