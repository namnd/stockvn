import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'

const AppRouter = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Header} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
