import React from 'react'
import Navbar from './Navbar'
import CurrentExchangeRates from './CurrentExchangeRates'
import CarouselSection from './CarouselSection'
import Services from './Services'
import SecuritySection from './SecuritySection'
import CountriesSection from './CountriesSection'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselSection />
      <Services />
      <div style={{display: 'flex'}}>
        <SecuritySection />
        <CurrentExchangeRates />
      </div>
      <CountriesSection />
      <Footer />
    </div>

  )
}
