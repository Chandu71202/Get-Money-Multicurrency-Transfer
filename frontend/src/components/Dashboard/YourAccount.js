import React from 'react'
import "../../styles/Dashboard/YourAccount.css"
import { useState } from 'react';
export default function YourAccount({ account }) {

  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <div className="account-container">
      <div
        className={`acc-card ${activeCard === 'GBP' ? 'active1' : ''}`}
        onClick={() => toggleCard('GBP')}
      >
        <h2>GBP Balance</h2>
        {activeCard === 'GBP' && <p>GBP BALANCE: {account.balanceGBP}</p>}
      </div>

      <div
        className={`acc-card ${activeCard === 'USD' ? 'active2' : ''}`}
        onClick={() => toggleCard('USD')}
      >
        <h2>USD Balance</h2>
        {activeCard === 'USD' && <p>USD BALANCE: {account.balanceUSD}</p>}
      </div>

      <div
        className={`acc-card ${activeCard === 'EUR' ? 'active3' : ''}`}
        onClick={() => toggleCard('EUR')}
      >
        <h2>EUR Balance</h2>
        {activeCard === 'EUR' && <p>EUR BALANCE: {account.balanceEUR}</p>}
      </div>
    </div>
  );
}
