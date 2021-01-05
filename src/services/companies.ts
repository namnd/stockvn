import {gql} from '@apollo/client'
import graphqlClient from './graph'

export type Company = {
    code: string
    name: string
    exchange: string
    sector?: string
    sectorId?: string
    marketValue?: number
}

export const getCompanies = async (): Promise<Company[]> => {
    const result = await graphqlClient.query({
        query: gql`
        query {
            companies {
                code
                name
                exchange
                sector
                sectorId
            }
        }
        `
    })
    return result.data.companies
}
