import React from 'react';
import {CustomNav} from './helper';
import {connect} from 'react-redux';

const Nav = props => {
    console.log('nav props')
    console.log(props)
    return (
        <nav>
            <ul className="tabs padding-bottom-medium">
                { props.city.map((city, idx) =>
                    (
                    <CustomNav to={`/${city}`} key={idx} label={city} generalClassName="tab-title" activeOnlyWhenExact={true} />)
               )}
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps)(Nav)