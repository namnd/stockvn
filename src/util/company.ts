import {Company} from '../services/company'

export const getCompanyPath = (company: Company, path: string): string => {
    return `/stock/${company.code}.${company.exchange}/${path}`
}

export const isActivePath = (company: Company, pathname: string, path: string): boolean => {
    return pathname === getCompanyPath(company, path)
}
