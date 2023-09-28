import React from 'react'
import '../styles/Services.css'

export default function Services() {
  return (
    <div>
      <div className='header'>
        Any Transaction, Anywhere
      </div>
      <section className='container'>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Convert your Money</h1>
          </div>
          <div className="flip-card-back">
            <h1>Back Content</h1>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Front Content</h1>
          </div>
          <div className="flip-card-back">
            <h1>Back Content</h1>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Front Content</h1>
          </div>
          <div className="flip-card-back">
            <h1>Back Content</h1>
          </div>
        </div>
      </div>
      </section>
    </div>

  )
}
