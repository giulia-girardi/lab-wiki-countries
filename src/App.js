import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import { Route, Routes, useParams } from 'react-router-dom';
import CountriesDetails from './components/CountriesDetails';
import { useState } from 'react'
import countriesJSON from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesJSON);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries}/>} /> 
        <Route path={`/:alpha`} element={<CountriesDetails countries={countries}/>} /> 
      </Routes>
    </div>
  );
}

export default App;
