const initialState = {
    info: null,
}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SETINFOUSER':
            return {
                ...state,
                info: action.payload
            }

        default:
            return {
                ...state,
            }
    }
}

export default userInfo
