const updateToken = (token) => {
    return {
        type: 'UPDATE_TOKEN',
        token: token
    }
}

export { updateToken }