import {gql} from '@apollo/client'
import { EXCHANGE } from '../store/slices/stockScreenerSlice'
import graphqlClient from './graph'

export type Company = {
    code: string
    name: string
    exchange: string
    sectorId?: string
    marketValue?: number
}

type CompanySearchParams = {
    exchange: EXCHANGE
    sectorIds?: string[]
}

export const getCompanies = async (searchParams: CompanySearchParams): Promise<Company[]> => {
    const result = await graphqlClient.query({
        query: gql`
        query ($searchParams: CompanySearchParams) {
            companies (searchParams: $searchParams) {
                code
                name
                exchange
                sector
                sectorId
            }
        }
        `,
        variables: {
            searchParams
        }
    })
    return result.data.companies
}
