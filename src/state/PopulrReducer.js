const initialState = {
    user: null,
    messages: []
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

        default:
            return state;
    }
}

export { PopulrReducer }