import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function CountriesDetails({countries}) {
    let {alpha} = useParams()

    const [oneCountry, setOneCountry] = useState('')

    useEffect(()=> {
        const filteredCountry = countries.find((country)=> {
            return country.alpha3Code == alpha

        })
        setOneCountry(filteredCountry)
    }, [alpha])


  return (
    <div>
    {oneCountry && (
        <>
        <div className="col-7">
            <h1> {oneCountry.name.official} </h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{oneCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {oneCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {oneCountry.borders.map((borderCountry)=> {
                                <li>
                                    <Link to={`/${borderCountry}`}>
                                    {countries.find((country)=> country.alpha3Code == borderCountry)}
                                    </Link>
                                </li>
                                console.log(borderCountry)
                            })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )}
    </div>
  )
}

export default CountriesDetails