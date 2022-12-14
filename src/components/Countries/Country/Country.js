import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, name, region, flags} = props.country;
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="flags" />
            <h3>Area: {area}</h3>
            <small>Region: {region}</small>
        </div>
    );
};

export default Country;