import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppRouter from './routes'
import { persistor, store } from './store'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
