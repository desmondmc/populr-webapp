const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TOKEN':
            return Object.assign({}, state, {
                token: action.token,
            });

        default:
            return state;
    }
}

export { authReducer }