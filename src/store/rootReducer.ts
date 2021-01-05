import {combineReducers} from '@reduxjs/toolkit'
import stockScreenerSlice from './slices/stockScreenerSlice'

const rootReducer = combineReducers({
    stockScreener: stockScreenerSlice,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
