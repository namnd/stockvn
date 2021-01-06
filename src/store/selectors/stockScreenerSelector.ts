import {Sector} from '../../services/sector'
import { RootState } from '../rootReducer'
import { EXCHANGE } from '../slices/stockScreenerSlice'

export const getExchange = (state: RootState): EXCHANGE =>
    state.stockScreener.exchange

export const getStoreSectors = (state: RootState): Sector[] =>
    state.stockScreener.sectors

export const getSectorIds = (state: RootState): string[] => {
    if (!state.stockScreener.sectors) return []
    return state.stockScreener.sectors.map((s: Sector) => s.id)
}
