import React, {useEffect, useState} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Company, getCompany} from '../services/company'
import StockNavigation from './StockNavigation'

type StockDetailProps = RouteComponentProps<{
    code: string
    exchange: string
}>

const StockDetail = (props: StockDetailProps): JSX.Element => {
    const { code, exchange  } = props.match.params
    const [company, setCompany] = useState<Company>({} as Company)

    useEffect(() => {
        async function fetchData() {
            const result = await getCompany(exchange, code)
            setCompany(result)
        }
        fetchData()
    }, [exchange, code])

    return (
        <>
            <h4>{company.name} ({code}.{exchange})</h4>
            <StockNavigation company={company} />
        </>

    )
}

export default StockDetail
