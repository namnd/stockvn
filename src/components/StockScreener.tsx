import React from 'react'
import { batch, useSelector } from 'react-redux'
import {Sector} from '../services/sector'
import { store } from '../store'
import {
    getExchange,
    getSectorIds,
} from '../store/selectors/stockScreenerSelector'
import {
    EXCHANGE,
    resetSectors,
    updateExchange,
    updateSectors,
} from '../store/slices/stockScreenerSlice'
import {SectorOption} from '../util/sector'
import CompaniesList from './CompaniesList'
import ExchangeRadio from './SearchParams/ExchangeRadio'
import SectorSelect from './SearchParams/SectorSelect'

const StockScreener = (): JSX.Element => {
    const exchange = useSelector(getExchange)
    const sectorIds = useSelector(getSectorIds)

    const selectExchange = (value: EXCHANGE) => {
        batch(() => {
            store.dispatch(
                updateExchange(value)
            )
            store.dispatch(resetSectors())
        })
    }

    const selectSectors = (sectors: SectorOption[]) => {
        store.dispatch(
            updateSectors(sectors as Sector[])
        )
    }

    return (
        <div className="main">
            <div className="sidebar p-3">
                <ExchangeRadio exchange={exchange} onSelect={selectExchange} />
                <SectorSelect exchange={exchange} onSelect={selectSectors} />
            </div>
            <div className="content">
                <CompaniesList exchange={exchange} sectorIds={sectorIds} />
            </div>
        </div>
    )
}

export default StockScreener
