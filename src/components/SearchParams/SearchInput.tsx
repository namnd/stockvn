import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {getSectors, Sector} from '../../services/sector'

const SearchInput = (): JSX.Element => {
    const [options, setOptions] = useState<Sector[]>([])

    useEffect(() => {
        async function fetchData() {
            const result = await getSectors()
            setOptions(result)
        }
        fetchData()
    }, [setOptions])

    return (
        <Select
            isMulti
            isSearchable
            placeholder="Select sectors"
            name="sectors"
            options={options}
        />
    )
}

export default SearchInput
