const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        user: user
    }
}

const updateMessages = (messages) => {
    return {
        type: 'UPDATE_MESSAGES',
        messages: messages
    }
}

export { updateUser, updateMessages }