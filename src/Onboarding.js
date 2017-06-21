/**
 * Created by desmondmcnamee on 2017-06-18.
 */

import React, { Component } from 'react';
import './Onboarding.css';

const API = require('./networking/API.js');

class Onboarding extends Component {
    constructor() {
        super();
        this.state = {
            data: "",
        };
    }

    render() {
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
        console.log("Here!")
        const username = this.refs.username.value
        const password = this.refs.password.value

        API.login(username, password, (response) => {
            alert(response);
        })
    }

    register() {
        const username = this.refs.username.value
        const password = this.refs.password.value

        API.register(username, password, (response) => {
            alert(response);
        })
    }
}

export default Onboarding;