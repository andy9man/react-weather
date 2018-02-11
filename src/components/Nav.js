import React from 'react';
import {CustomNav} from './helper';

const Nav = props => {
    console.log('nav props')
    console.log(props)
    return (
        <nav>
            <ul className="tabs padding-bottom-medium">
                { props.city.map((city, idx) =>
                    (
                    <CustomNav to={`/${city.name}`} key={idx} label={city.name} generalClassName="tab-title" activeOnlyWhenExact={true} />)
               )}
            </ul>
        </nav>
    )
}

export default Nav;