import React, {useEffect, useState} from 'react'
import { getCompanies, Company} from '../services/companies'

const CompaniesList = (): JSX.Element => {
    const [companies, setCompanies] = useState<Company[]>([])

    useEffect(() => {
        getCompanies().then(result => {
            setCompanies(result)
        })
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Company Name</th>
                    <th>Sector</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {companies.map((company: Company) => (
                    <tr key={`${company.code}-${company.exchange}`}>
                        <td>{company.code}</td>
                        <td>{company.name}</td>
                        <td>{company.sector}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CompaniesList
