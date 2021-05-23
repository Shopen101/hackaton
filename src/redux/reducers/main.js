function noop() {}

const initialState = {
    accessToken: null,
    refreshToken: null,
    login: noop,
    logout: noop,
    isAuthenticated: false,
    firstName: null,
}

const main = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                accessToken: action.payload.token1,
                refreshToken: action.payload.token2,
                firstName: action.payload.firstName,
            }
        case 'LOGOUT':
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                login: noop,
                logout: noop,
                isAuthenticated: false,
                firstName: null,
            }
        case 'SETFUNC':
            return {
                ...state,
                login: action.payload.login,
                logout: action.payload.logout,
            }

        default:
            return {
                ...state,
            }
    }
}

export default main
