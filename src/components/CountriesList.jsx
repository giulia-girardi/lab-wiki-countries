import React from 'react'
import { Link } from 'react-router-dom';

function CountriesList({countries}) {
  return (
    <div className="container">
        <div class="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <div className="list-group">
                    {countries.map((country)=> {
                        return (
                            <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`} style={{display: 'flex', alignItems: 'center'}}>
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag of country' style={{height: '10px', margin: '10px'}}/>                                
                                <p style={{margin: '0'}}>{country.name.common}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountriesList