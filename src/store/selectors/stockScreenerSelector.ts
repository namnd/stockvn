import { RootState } from '../rootReducer'
import { EXCHANGE } from '../slices/stockScreenerSlice'

export const getExchange = (state: RootState): EXCHANGE =>
    state.stockScreener.exchange
