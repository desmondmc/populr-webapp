import React from 'react'
import Onboarding from './Onboarding'
import LoggedinContainer from '../containers/LoggedinContainer'
import { API } from '../networking/API'

function Login(props) {
	if (props.user != null) {
		API.loadMessages()
		return <LoggedinContainer messages={props.messages}/>
	} else {
		return <Onboarding />
	}
}

export default Login