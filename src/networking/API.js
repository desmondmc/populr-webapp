import { updateUser, updateMessages } from '../state/Action'
import { store } from '../index'
import { Cookies } from '../utils/Cookies'

const rootUrl = "http://populr_go_api.gzelle.co"

class API {
    static login(username, password) {
        if (username.length === 0 || password.length === 0) {
            return
        }

        const url = rootUrl + "/login"
        const json = {data: {"username": username, "password": password}}

        HTTPRequest.post(url, json, (string, status) => {
            const json = JSON.parse(string)
            const error = errorMessage(json)
            if (error != null) {
                alert(error)
                return
            }

            const user = {
                token:json.data.new_token,
                id:json.data.id
            }

            Cookies.saveUser(json.data.new_token, json.data.id)

            const action = updateUser(user)
            store.dispatch(action)
        })
    }

    static register(username, password) {
        if (username.length === 0 || password.length === 0) {
            return
        }

        const url = rootUrl + "/signup"
        const json = {data: {"username": username, "password": password}}

        HTTPRequest.post(url, json, (string, status) => {
            const json = JSON.parse(string)
            const error = errorMessage(json)
            if (error != null) {
                alert(error)
                return
            }

            const user = {
                token:json.data.new_token,
                id:json.data.id
            }

            Cookies.saveUser(json.data.new_token, json.data.id)

            const action = updateUser(user)
            store.dispatch(action)
        })
    }

    static loadMessages() {
        const url = rootUrl + "/messages"

        HTTPRequest.get(url, (string, status) => {
            const json = JSON.parse(string)
            const error = errorMessage(json)
            if (error != null) {
                alert(error)
                return
            }

            const messages = json.data

            const action = updateMessages(messages)
            store.dispatch(action)
        })
    }
}

export { API } 

// Private

function errorMessage(json) {
    if (json === undefined) {
        return "Unknown error occured."
    } else if (json.errors != null) {
        let error = json.errors[0]
        return error.title
    } else {
        return null
    }
}

class HTTPRequest {
    static post(url, json, resultCallback) {
        const http = new XMLHttpRequest()
        http.open("POST", url, true)
        http.setRequestHeader('Accept', 'application/vnd.api+json')
        http.setRequestHeader('Content-Type', 'application/vnd.api+json')

        const jsonData = JSON.stringify(json)
        http.send(jsonData)

        http.onreadystatechange = () => {
            if(http.readyState === 4/*Done*/) {
                resultCallback(http.responseText, http.status)
            }
        }
    }

    static get(url, resultCallback) {
        const http = new XMLHttpRequest()
        const user = store.getState().user

        http.open("GET", url, true)
        http.setRequestHeader('Accept', 'application/vnd.api+json')
        http.setRequestHeader('Content-Type', 'application/vnd.api+json')
        http.setRequestHeader('x-key', user.id)
        http.setRequestHeader('new-token', user.token)

        http.send()

        http.onreadystatechange = () => {
            if(http.readyState === 4/*Done*/) {
                resultCallback(http.responseText, http.status)
            }
        }
    }
}