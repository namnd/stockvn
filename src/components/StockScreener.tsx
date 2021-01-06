import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store'
import { getExchange } from '../store/selectors/stockScreenerSelector'
import { EXCHANGE, updateExchange } from '../store/slices/stockScreenerSlice'
import CompaniesList from './CompaniesList'
import ExchangeRadio from './SearchParams/ExchangeRadio'
import SearchInput from './SearchParams/SearchInput'

const StockScreener = (): JSX.Element => {
    const exchange = useSelector(getExchange)
    const selectExchange = (value: EXCHANGE) => {
        store.dispatch(
            updateExchange(value)
        )
    }

    return (
        <div className="main">
            <div className="sidebar">
                <ExchangeRadio 
                    exchange={exchange}
                    onSelect={selectExchange}
                />
                <SearchInput />
            </div>
            <div className="content">
                <CompaniesList exchange={exchange} />
            </div>
        </div>

    )
}

export default StockScreener
