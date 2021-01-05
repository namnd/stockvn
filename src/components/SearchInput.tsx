import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {getSectors} from '../services/sector'

const SearchInput = (): JSX.Element => {
    const [options, setOptions] = useState([{}])
    // const [selectedOption, setSeletedOption] = useState({})

    useEffect(() => {
        getSectors().then(result => {
            setOptions(result)
        })
    }, [])

    return (
        <div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    id="all"
                    name="exchange"
                    value="all"
                />
                <label className="form-check-label" htmlFor="all">
            All
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    id="hnx"
                    name="exchange"
                    value="hnx"
                />
                <label className="form-check-label" htmlFor="hnx">
            HNX
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    id="hsx"
                    name="exchange"
                    value="hsx"
                />
                <label className="form-check-label" htmlFor="hsx">
            HSX
                </label>
            </div>
            <Select
                isMulti
                isSearchable
                placeholder="Select sectors"
                name="sectors"
                options={options}
            />
        </div>
    )
}

export default SearchInput
