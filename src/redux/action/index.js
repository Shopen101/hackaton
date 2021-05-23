export const loginUser = (jwtToken1, jwtToken2, firstName, id) => ({
    type: 'LOGIN',
    payload: {
        firstName,
        userId: id,
        token1: jwtToken1,
        token2: jwtToken2,
    },
})

export const logoutUser = () => ({
    type: 'LOGOUT',
})

export const setCategories = arr => ({
    type: 'SETCATEGORIES',
    payload: arr
})

export const setUserInfo = info => ({
    type: 'SETINFOUSER',
    payload: info
})

export const setFuncLogInOut = (login, logout) => ({
    type: 'SETFUNC',
    payload: { login, logout },
})

export const setCurrCategorys = arr => ({
    type: 'SETCURRENTCATEGORY',
    payload: arr
})