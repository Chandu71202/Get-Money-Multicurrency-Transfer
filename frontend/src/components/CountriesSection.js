import React from 'react'
import '../styles/CountriesSection.css'

const countries = [
  { name: 'United Kingdom', logo: 'https://wise.com/web-art/assets/flags/gb.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/us.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/au.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/be.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/br.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/ca.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/cr.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/cz.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/dk.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/eg.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/fi.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/fr.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/de.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/gr.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/hk.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/in.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/id.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/ie.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/jp.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/mx.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/ae.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/se.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/es.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/ch.svg' },
  { name: 'Country 2', logo: 'https://wise.com/web-art/assets/flags/nz.svg' },
];

export default function CountriesSection() {
  return (
    <div className='countrySection'>
      <div>
        <h1 className='country-header'>We are almost everywhere.</h1>
      </div>
      <div className="country-grid">
        {countries.map((country, index) => (
          <div key={index} className="country-card">
            <img src={country.logo} alt={country.name} />
            <p style={{marginTop:5, marginBottom:5}}>{country.name}</p>
          </div>
        ))}

      </div>
      <div>
        <h3 className='country-title'>And many, many more...</h3>
      </div>
    </div>
  )
}
