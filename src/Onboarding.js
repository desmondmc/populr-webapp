/**
 * Created by desmondmcnamee on 2017-06-18.
 */

import React, { Component } from 'react';
import { API } from './networking/API'
import './Onboarding.css';

class Onboarding extends Component {

    render() {
        console.log("Rendering!")
        return (
        <div className="OnboardingContainer">
            <div className="Onboarding">
                <div>
                    <input ref="username" type="text" placeholder="username">
                    </input>
                </div>
                <div>
                    <input ref="password" type="password" placeholder="password">
                    </input>
                </div>
                <div>
                    <button onClick={() => this.login()}>
                        Login
                    </button>
                    <button onClick={() => this.register()}>
                        Register
                    </button>
                </div>
            </div>
        </div>
        );
    }

    login() {
        const username = this.refs.username.value
        const password = this.refs.password.value

        API.login(username, password)
    }

    register() {
        const username = this.refs.username.value
        const password = this.refs.password.value

        API.register(username, password)
    }
}

export default Onboarding;