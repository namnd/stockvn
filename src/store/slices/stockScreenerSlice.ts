import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Sector} from '../../services/sector'

export enum EXCHANGE {
    ALL = 'all',
    HNX = 'HNX',
    HSX = 'HSX',
}
export interface StockScreenerState {
    exchange: EXCHANGE
    sectors: Sector[]
}

const initialState: StockScreenerState = {
    exchange: EXCHANGE.ALL,
    sectors: []
}

const stockScreenerSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateExchange(state, action: PayloadAction<EXCHANGE>) {
            state.exchange = action.payload
        },
        resetSectors(state) {
            state.sectors = []
        },
        updateSectors(state, action: PayloadAction<Sector[]>) {
            state.sectors = action.payload
        }
    },
})

export const {
    updateExchange,
    resetSectors,
    updateSectors,
} = stockScreenerSlice.actions

export default stockScreenerSlice.reducer
