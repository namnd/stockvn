import {gql} from '@apollo/client'
import graphqlClient from './graph'

export type Sector = {
    id: string
    children: Sector[]
}

export const getSectors = async (): Promise<Sector[]> => {
    const result = await graphqlClient.query({
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
    })
    return result.data.sectors.map((s: Sector) => {
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
}
