import React, { Component } from 'react'
import { updateUser } from '../state/Action'
import { store } from '../index'
import { Cookies } from '../utils/Cookies'
import MessageListContainer from '../containers/MessageListContainer'


class Loggedin extends Component {

    render() {
    	console.log("Rendering some messages!")
    	console.log(this.props.messages)
        return (
        <div>
        	<button onClick={() => this.logout()}>Logout</button>
        	<MessageListContainer/>
        </div>
        );
    }

    logout() {
    	Cookies.deleteUser()
    	const action = updateUser(null)
        store.dispatch(action)
    }
}

export default Loggedin