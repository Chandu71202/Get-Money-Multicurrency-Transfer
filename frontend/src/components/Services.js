import React from 'react'
import '../styles/Services.css'

export default function Services() {
  return (
    <div>
      <div className='header'>
        Global Exchange and Transaction of Money
      </div>
      <section className='container'>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front card-img-1">
            <h1>Convert your Money</h1>
          </div>
          <div className="flip-card-back card-img-back">
            <p>Effortlessly exchange currencies, maximizing the value of your money with seamless conversion services.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front card-img-2">
            <h1>Transactions: Anywhere to Everywhere</h1>
          </div>
          <div className="flip-card-back card-img-back">
            <p>Get your money moving internationally. Save up to 3.9x when you send with us.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front card-img-3">
            <h1>Safe, Swift and Secure</h1>
          </div>
          <div className="flip-card-back card-img-back">
            <p>Make swift transactions, assured by safety and security every step of the way</p>
          </div>
        </div>
      </div>
      </section>
    </div>

  )
}
