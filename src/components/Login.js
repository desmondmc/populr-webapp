import React from 'react'
import Onboarding from './Onboarding'
import LoggedinContainer from '../containers/LoggedinContainer'
import SpeedMessageContainer from '../containers/SpeedMessageContainer'
import { API } from '../networking/API'

function Login(props) {
	if (props.user != null) {
		if (props.messageToPlay != null) {
			return <SpeedMessageContainer className="SpeedMessageContainer"/>
		} else {
			API.loadMessages()
			return <LoggedinContainer messages={props.messages}/>
		}
	} else {
		return <Onboarding />
	}
}

export default Login