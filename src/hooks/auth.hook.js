import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser, logoutUser } from '../redux/action/index'

const storageName = 'projectData'

export const useAuth = () => {
    const dispatch = useDispatch()

    const login = useCallback((accessToken, refreshToken, id, firstName, lastname) => {
        dispatch(loginUser(accessToken, refreshToken, id, firstName, lastname))

        localStorage.setItem(
            storageName,
            JSON.stringify({
                userId: id,
                accessToken,
                refreshToken,
                firstName,
                lastname,
            }),
        )
    }, [])

    const logout = useCallback(() => {
        dispatch(logoutUser())

        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(
                data.token,
                data.userId,
                data.firstName,
                data.lastname,
                data.accessToken,
                data.refreshToken,
            )
        }

    }, [login])

    return { login, logout }
}
