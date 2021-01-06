import {Sector} from '../services/sector'

export interface SectorOption extends Sector {
    value: string
}
export const sectorsToOptions = (sectors: Sector[]): SectorOption[] => {
    if (sectors && sectors.length > 0) {
        return sectors.map((s: Sector) => {
            return {
                ...s,
                value: s.id,
            }
        })
    }
    return []
}
