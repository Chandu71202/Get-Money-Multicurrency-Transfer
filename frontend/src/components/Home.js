import React from 'react'
import Navbar from './Navbar'
import CurrentExchangeRates from './CurrentExchangeRates'
import CarouselSection from './CarouselSection'
import Services from './Services'
import SecuritySection from './SecuritySection'
import CountriesSection from './CountriesSection'
import MyFAQ from './MyFAQ'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselSection />
      <Services />
      <SecuritySection />
      <CurrentExchangeRates />
      <CountriesSection />
      <MyFAQ />
      <Footer />
    </div>

  )
}
