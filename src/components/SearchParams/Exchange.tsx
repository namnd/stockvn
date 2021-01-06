import React from 'react'
import {useSelector} from 'react-redux'
import { store } from '../../store'
import {getExchange} from '../../store/selectors/stockScreenerSelector'
import {EXCHANGE, updateExchange} from '../../store/slices/stockScreenerSlice'

type RadioOption = {
    key: EXCHANGE
    label: string
}
const radioOptions: RadioOption[] = [
    {key: EXCHANGE.ALL, label: 'All'},
    {key: EXCHANGE.HNX, label: 'HNX'},
    {key: EXCHANGE.HSX, label: 'HSX'},
]
const Exchange = (): JSX.Element => {
    const exchange = useSelector(getExchange)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        store.dispatch(
            updateExchange(e.target.value as EXCHANGE)
        )
    }
    return (
        <div>
            {radioOptions.map((option: RadioOption) => (
                <div key={option.key} className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        id={option.key}
                        name="exchange"
                        value={option.key}
                        checked={option.key == exchange}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={option.key}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default Exchange
