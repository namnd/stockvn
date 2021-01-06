import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {getSectors, Sector} from '../../services/sector'
import Exchange from './Exchange'

const SearchInput = (): JSX.Element => {
    const [options, setOptions] = useState<Sector[]>([])
    // const [selectedOption, setSeletedOption] = useState({})

    useEffect(() => {
        async function fetchData() {
            const result = await getSectors()
            setOptions(result)
        }
        fetchData()
    }, [setOptions])

    return (
        <div>
            <Exchange />
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
