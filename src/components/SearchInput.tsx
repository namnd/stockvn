import React, { useEffect, useState } from 'react'
import { ApolloClient, gql, InMemoryCache} from '@apollo/client'
import Select from 'react-select'

const client = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache()
})

type Sector = {
    id: string
    children: Sector[]
}

const SearchInput = (): JSX.Element => {
    const [options, setOptions] = useState([{}])
    // const [selectedOption, setSeletedOption] = useState({})

    useEffect(() => {
        client.query({
            query: gql`
            query GetSectors {
                sectors {
                    id
                    label
                    children {
                        id
                        label
                    }
                }
            }
            `
        }).then(result => {
            const sectors = result.data.sectors.map((s: Sector) => {
                return {
                    ...s,
                    value: s.id,
                    options: s.children.map((c: Sector) => {
                        return {
                            ...c,
                            value: s.id,
                        }
                    }),
                }
            })
            setOptions(sectors)
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
