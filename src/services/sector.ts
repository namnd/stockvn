import { gql } from '@apollo/client'
import { EXCHANGE } from '../store/slices/stockScreenerSlice'
import graphqlClient from './graph'

export interface Sector {
  id: string
  label: string
  exchange: string
}

export const getSectors = async (exchange: EXCHANGE): Promise<Sector[]> => {
    const result = await graphqlClient.query({
        query: gql`
        query ($exchange: String) {
          sectors (exchange: $exchange) {
            id
            label
            exchange
          }
        }
      `,
        variables: {
            exchange
        }
    })
    return result.data.sectors
}
