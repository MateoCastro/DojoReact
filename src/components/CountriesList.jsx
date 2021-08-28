import React from 'react';
import CardCountries from './CardCountry';

function CountriesList({countries}) {
    return(
        <div>
            {countries.map((country) => {
                return(
                    <CardCountries key={country.alpha2Code} name={country.name} capital={country.capital} flag={country.flag}></CardCountries>
                )
            })}
        </div>
    )
}

export default CountriesList