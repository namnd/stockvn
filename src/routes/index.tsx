import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StockDetail from '../components/StockDetail/StockDetail'
import StockScreener from '../components/StockScreener'

const AppRouter = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StockScreener} />
                <Route exact path="/stock/:code.:exchange/:detail" component={StockDetail} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
