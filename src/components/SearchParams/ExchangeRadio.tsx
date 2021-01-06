import React from 'react'
import {EXCHANGE} from '../../store/slices/stockScreenerSlice'

type RadioOption = {
    key: EXCHANGE
    label: string
}
const radioOptions: RadioOption[] = [
    {key: EXCHANGE.ALL, label: 'All'},
    {key: EXCHANGE.HNX, label: 'HNX'},
    {key: EXCHANGE.HSX, label: 'HSX'},
]
type ExchangeRadioProps = {
    exchange: EXCHANGE
    onSelect: (value: EXCHANGE) => void
}
const ExchangeRadio = (props: ExchangeRadioProps): JSX.Element => {
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
                        checked={option.key == props.exchange}
                        onChange={(e) => props.onSelect(e.target.value as EXCHANGE)}
                    />
                    <label className="form-check-label" htmlFor={option.key}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default ExchangeRadio
