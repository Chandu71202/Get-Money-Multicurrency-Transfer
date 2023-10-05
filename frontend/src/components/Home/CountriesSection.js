import React from 'react'
import '../../styles/Home/CountriesSection.css'

const countries = [
  { name: 'United Kingdom', logo: 'https://wise.com/web-art/assets/flags/gb.svg' },
  { name: 'United States', logo: 'https://wise.com/web-art/assets/flags/us.svg' },
  { name: 'Australia', logo: 'https://wise.com/web-art/assets/flags/au.svg' },
  { name: 'Belgium', logo: 'https://wise.com/web-art/assets/flags/be.svg' },
  { name: 'Brazil', logo: 'https://wise.com/web-art/assets/flags/br.svg' },
  { name: 'Canada', logo: 'https://wise.com/web-art/assets/flags/ca.svg' },
  { name: 'Costa Rica', logo: 'https://wise.com/web-art/assets/flags/cr.svg' },
  { name: 'Czech Republic', logo: 'https://wise.com/web-art/assets/flags/cz.svg' },
  { name: 'Denmark', logo: 'https://wise.com/web-art/assets/flags/dk.svg' },
  { name: 'Egypt', logo: 'https://wise.com/web-art/assets/flags/eg.svg' },
  { name: 'Finland', logo: 'https://wise.com/web-art/assets/flags/fi.svg' },
  { name: 'France', logo: 'https://wise.com/web-art/assets/flags/fr.svg' },
  { name: 'Germany', logo: 'https://wise.com/web-art/assets/flags/de.svg' },
  { name: 'Greece', logo: 'https://wise.com/web-art/assets/flags/gr.svg' },
  { name: 'Hong Kong', logo: 'https://wise.com/web-art/assets/flags/hk.svg' },
  { name: 'India', logo: 'https://wise.com/web-art/assets/flags/in.svg' },
  { name: 'Indonesia', logo: 'https://wise.com/web-art/assets/flags/id.svg' },
  { name: 'Ireland', logo: 'https://wise.com/web-art/assets/flags/ie.svg' },
  { name: 'Japan', logo: 'https://wise.com/web-art/assets/flags/jp.svg' },
  { name: 'Mexico', logo: 'https://wise.com/web-art/assets/flags/mx.svg' },
  { name: 'United Arab Emirates', logo: 'https://wise.com/web-art/assets/flags/ae.svg' },
  { name: 'Sweden', logo: 'https://wise.com/web-art/assets/flags/se.svg' },
  { name: 'Spain', logo: 'https://wise.com/web-art/assets/flags/es.svg' },
  { name: 'Switzerland', logo: 'https://wise.com/web-art/assets/flags/ch.svg' },
  { name: 'New Zealand', logo: 'https://wise.com/web-art/assets/flags/nz.svg' },
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
