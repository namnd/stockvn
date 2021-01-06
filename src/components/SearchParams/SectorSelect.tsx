import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Select from 'react-select'
import {getSectors} from '../../services/sector'
import {getStoreSectors} from '../../store/selectors/stockScreenerSelector'
import {EXCHANGE} from '../../store/slices/stockScreenerSlice'
import {SectorOption, sectorsToOptions} from '../../util/sector'

type SectorSelectProps = {
    exchange: EXCHANGE
    onSelect: (value: SectorOption[]) => void
}
const SectorSelect = (props: SectorSelectProps): JSX.Element => {
    const [options, setOptions] = useState<SectorOption[]>([])
    const selectedSectors = useSelector(getStoreSectors)

    useEffect(() => {
        async function fetchData() {
            const sectors = await getSectors(props.exchange)
            setOptions(sectorsToOptions(sectors))
        }
        fetchData()
    }, [props.exchange])

    return (
        <Select
            isMulti
            isSearchable
            placeholder={`Select sectors (${options.length})`}
            name="sectors"
            value={sectorsToOptions(selectedSectors)}
            options={options}
            onChange={(e) => props.onSelect(e as SectorOption[])}
        />
    )
}

export default SectorSelect
