import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from './hooks/auth.hook'
import { setFuncLogInOut } from './redux/action'
import { useRoutes } from './hooks/routes.hook'
import { api } from './config/index'

function App() {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

    const { login, logout } = useAuth()
    const routes = useRoutes(isAuthenticated)

    dispatch(setFuncLogInOut(login, logout))

    return (
        <div className="App">
            <div>{routes}</div>
        </div>
    )
}

export default App
