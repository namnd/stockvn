import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
        updateExchange(
            state,
            action: PayloadAction<EXCHANGE>) {
            state.exchange = action.payload
        }
    }
})

export const { updateExchange } = stockScreenerSlice.actions

export default stockScreenerSlice.reducer
