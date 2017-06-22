const updateToken = (token) => {
	console.log("updateing ")
    return {
        type: 'UPDATE_TOKEN',
        token: token
    }
}

export { updateToken }