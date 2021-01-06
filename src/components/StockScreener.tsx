import React from 'react'
import CompaniesList from './CompaniesList'
import SearchInput from './SearchParams/SearchInput'

const StockScreener = (): JSX.Element => {

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
