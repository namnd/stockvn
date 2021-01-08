import {gql} from '@apollo/client'
import graphqlClient from './graph'

export type Trade = {
    closePrice: number
    volume: number
    timestamp: number
}

export const getTrades = async (code: string): Promise<Trade[]> => {
    const result = await graphqlClient.query({
        query: gql`
        query($code: String!) {
          trades(code: $code) {
            closePrice
            volume
            timestamp
          }
        }
      `,
        variables: {
            code,
        },
    })
    return result.data.trades
}
