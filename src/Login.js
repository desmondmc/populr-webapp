import React from 'react';
import Onboarding from './Onboarding';
import './App.css';

function Login(props) {
	if (props.token != null) {
		return <h1>Hey you logged in</h1>
	} else {
		return <Onboarding />
	}
}

export default Login