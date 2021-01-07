import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { getCompanies, Company} from '../services/company'
import { EXCHANGE } from '../store/slices/stockScreenerSlice'

type CompaniesListProps = {
    exchange: EXCHANGE
    sectorIds: string[]
}
const CompaniesList = (props: CompaniesListProps): JSX.Element => {
    const [companies, setCompanies] = useState<Company[]>([])

    useEffect(() => {
        getCompanies(props).then(result => {
            setCompanies(result)
        })
    }, [props])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Company Name ({companies.length})</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company: Company) => (
                    <tr key={`${company.code}.${company.exchange}`}>
                        <td><Link to={`/stock/${company.code}.${company.exchange}`}>{company.code}</Link></td>
                        <td>{company.name}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CompaniesList
