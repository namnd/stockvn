import classNames from 'classnames'
import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Company} from '../../services/company'
import {getCompanyPath, isActivePath} from '../../util/company'

type StockNavigationProps = {
    company: Company
}
const StockNavigation = (props: StockNavigationProps): JSX.Element => {
    const links = [
        { label: 'Summary', path: ''},
        { label: 'Chart', path: 'chart'},
        { label: 'Profile', path: 'profile'},
        { label: 'Reports', path: 'reports'},
    ]
    const history = useHistory()

    return (
        <ul className="nav nav-pills">
            {links.map((link) => (
                <li className="nav-item" key={link.path}>
                    <Link
                        className={classNames('nav-link', {
                            active: isActivePath(
                                props.company,
                                history.location.pathname,
                                link.path
                            ),
                        })}
                        to={getCompanyPath(props.company, link.path)}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default StockNavigation
