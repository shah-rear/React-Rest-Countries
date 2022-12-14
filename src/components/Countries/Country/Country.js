import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country: {props.name}</h2>
            <h4>Area: <small>{props.area}</small></h4>
            <h4>Population: <small>{props.popu}</small></h4>
        </div>
    );
};

export default Country;