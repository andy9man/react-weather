import React from 'react';
import {CustomNav} from './helper';

const Nav = props => {
    return (
        <nav>
            <ul className="tabs padding-bottom-medium">
                <CustomNav to='/' label='Home' generalClassName="tab-title" activeOnlyWhenExact={true} />

            </ul>
        </nav>
    )
}

export default Nav;