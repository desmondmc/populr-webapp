class Cookies {
	static saveUser(token, id) {
		document.cookie = "token=" + token
		document.cookie = "userId=" + id
	}

	static deleteUser() {
		document.cookie = "token="
		document.cookie = "userId="
	}

	static user() {
		const token = getCookie("token")
		const id = getCookie("userId")

		if (token == null || 
			id == null ||
			token === "" ||
			id === "") {
				return null
		}

		const user = {
			token: token,
			id: id
		}

		console.log("Found token in cookies: " + token)
		console.log("Found id in cookies: " + id)

		return user
	}

}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}


export { Cookies } 