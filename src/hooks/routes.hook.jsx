import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Auth, SignUp } from '../pages'
import Main from '../pages/Main'
import Category from '../pages/Category'
import UserPage from '../pages/UserPage'


export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/userPage" exact>
                    <UserPage />
                </Route>
                <Route path="/Category" exact>
                    <Category />
                </Route>
                <Route path="/Main" exact>
                    <Main />
                </Route>
                <Route path="/auth" exact>
                    <Auth />
                </Route>
                <Route path="/Signup" exact>
                    <SignUp />
                </Route>
                <Redirect to="/Main" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/userPage" exact>
                <UserPage />
            </Route>
            <Route path="/Category" exact>
                <Category />
            </Route>
            <Route path="/Main" exact>
                <Main />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Route path="/Signup" exact>
                <SignUp />
            </Route>
            <Redirect to="/Main" />
        </Switch>
    )
}

