import React, {useEffect, useState} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {Company, getCompany} from '../../services/company'
import StockChart from './StockChart'
import StockNavigation from './StockNavigation'
import StockProfile from './StockProfile'
import StockReports from './StockReports'
import StockSummary from './StockSummary'

type StockDetailProps = RouteComponentProps<{
    code: string
    exchange: string
    detail: string
}>

const StockDetail = (props: StockDetailProps): JSX.Element => {
    const { code, exchange, detail } = props.match.params
    const [company, setCompany] = useState<Company>({} as Company)

    useEffect(() => {
        async function fetchData() {
            const result = await getCompany(exchange, code)
            setCompany(result)
        }
        fetchData()
    }, [exchange, code])

    const DETAIL_COMPONENTS: Record<string, JSX.Element> = {
        'summary': <StockSummary />,
        'chart': <StockChart company={company} />,
        'profile': <StockProfile />,
        'reports': <StockReports />,
    }

    return (
        <>
            <h4>{company.name} ({code}.{exchange})</h4>
            <StockNavigation company={company} />
            {DETAIL_COMPONENTS[detail]}
        </>

    )
}

export default StockDetail
