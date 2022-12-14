import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area} = props.country;
    return (
        <div>
            <h3>Area: {area}</h3>
        </div>
    );
};

export default Country;