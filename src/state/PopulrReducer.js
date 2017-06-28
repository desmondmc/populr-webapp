const initialState = {
    user: null,
    messages: [],
    messageToPlay: null,
    wordIndex:0
};

const PopulrReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return Object.assign({}, state, {
                user: action.user,
            });

        case 'UPDATE_MESSAGES':
            return Object.assign({}, state, {
                messages: action.messages,
            });

        case 'PLAY_MESSAGE':
        	return Object.assign({}, state, {
                messageToPlay: action.messageToPlay,
            });
            
        default:
            return state;
    }
}

export { PopulrReducer }