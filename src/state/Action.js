const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        user: user
    }
}

const updateMessages = (messages) => {
	if (messages == null) {
		messages = []
	}
	
    return {
        type: 'UPDATE_MESSAGES',
        messages: messages
    }
}

const playMessage = (message) => {
    return {
        type: 'PLAY_MESSAGE',
        messageToPlay: message
    }
}

const dismissMessage = () => {
    return {
        type: 'PLAY_MESSAGE',
        messageToPlay: null
    }
}

export { 
	updateUser, 
	updateMessages, 
	playMessage, 
	dismissMessage
}