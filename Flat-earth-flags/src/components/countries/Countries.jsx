import React, { use } from 'react';
import Country from '../country/country';

const Countries = ({countriesApi}) => {

    const countriesData = use(countriesApi);
    const countries = countriesData.countries;
    console.log(countries);
    
    
    return (
        <div>
            <h1>Total: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;