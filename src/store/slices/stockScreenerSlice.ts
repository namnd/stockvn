import {createSlice} from '@reduxjs/toolkit'

export enum EXCHANGE {
    ALL = 'all',
    HNX = 'hnx',
    HSX = 'hsx',
}
export interface StockScreenerState {
    exchange: EXCHANGE
}

const initialState: StockScreenerState = {
    exchange: EXCHANGE.ALL
}

const stockScreenerSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
    }
})

export default stockScreenerSlice.reducer
