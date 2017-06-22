const rootUrl = "http://populr_go_api.gzelle.co"

class API {
    static login(username, password, resultCallback) {
        if (username.length === 0 || password.length === 0) {
            return
        }

        const url = rootUrl + "/login"
        const method = "POST"
        const json = {data: {"username": username, "password": password}}

        HTTPRequest.send(url,method,json, resultCallback)
    }

    static register(username, password, resultCallback) {
        if (username.length === 0 || password.length === 0) {
            return
        }

        const url = rootUrl + "/signup"
        const method = "POST"
        const json = {data: {"username": username, "password": password}}

        HTTPRequest.send(url,method,json, resultCallback)
    }
}

export { API } 

// Private

class HTTPRequest {
    static send(url, method, json, resultCallback) {
        const http = new XMLHttpRequest();
        http.open(method, url, true);
        http.setRequestHeader('Accept', 'application/vnd.api+json');
        http.setRequestHeader('Content-Type', 'application/vnd.api+json');

        const jsonData = JSON.stringify(json);
        http.send(jsonData);

        http.onreadystatechange = () => {
            if(http.readyState === 4/*Done*/) {
                resultCallback(http.responseText);
            }
        }
    }
}