import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StockScreener from '../components/StockScreener'

const AppRouter = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StockScreener} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
