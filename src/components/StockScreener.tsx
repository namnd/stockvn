import React from 'react'
import { useSelector } from 'react-redux'
import { getExchange } from '../store/selectors/stockScreenerSelector'
import CompaniesList from './CompaniesList'
import SearchInput from './SearchInput'

const StockScreener = (): JSX.Element => {
    const exchange = useSelector(getExchange)
    console.log(exchange)
    return (
        <div className="d-flex p-2">
            <SearchInput />
            <div className="flex-grow-1 ms-2">
                <CompaniesList />
            </div>
        </div>

    )
}

export default StockScreener
