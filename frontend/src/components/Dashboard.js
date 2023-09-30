import React, { useState } from 'react';
import '../styles/Dashboard.css';
import Navbar from './Navbar';
import * as Ailcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa'
import CurrentExchangeRates from './CurrentExchangeRates';

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState('My Account');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Navbar />
      <div className="container1">
        <div className="sidebar">
          <div>
            <div
              className={`sidebar-item ${selectedItem === 'Personal Profile' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Personal Profile')}
            >
              <span className='span'><FaIcons.FaUser/></span>
              Personal Profile
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'Inter-Account Transfer' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Inter-Account Transfer')}
            >
              <span className='span'><FaIcons.FaExchangeAlt/></span>

              Inter-Account Transfer
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'Deposit' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Deposit')}
            >
              <span className='span'><FaIcons.FaMoneyCheckAlt/></span>

              Deposit
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'Withdraw' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Withdraw')}
            >
              <span className='span'><FaIcons.FaMoneyBillWave/></span>

              Withdraw
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'Transaction History' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Transaction History')}
            >
              <span className='span'><FaIcons.FaHistory/></span>

              Transaction History
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'Support' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Support')}
            >
              <span className='span'><FaIcons.FaLifeRing/></span>

             Support
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'More Info' ? 'selected' : ''}`}
              onClick={() => handleItemClick('More Info')}
            >
              <span className='span'><FaIcons.FaInfoCircle/></span>

              More Info
            </div>
            <div
              className={`sidebar-item ${selectedItem === 'Settings' ? 'selected' : ''}`}
              onClick={() => handleItemClick('Settings')}
            >
              <span className='span'><FaIcons.FaCogs/></span>

              Settings
            </div>
          </div>
        </div>
        <div className="main-content1">
          <h1>Welcome to Your Bank</h1>
          <div className="content">
            {selectedItem === 'Personal Profile' && (
              <CurrentExchangeRates />
            )}
            {selectedItem === 'Inter-Account Transfer' && (
              <p>Inter-Account Transfer Content Goes Here</p>
            )}
            {selectedItem === 'Deposit' && (
              <p>Deposit Content Goes Here</p>
            )}
            {selectedItem === 'Withdraw' && (
              <p>Withdraw Content Goes Here</p>
            )}
            {selectedItem === 'Transaction History' && (
              <p>Transaction History Content Goes Here</p>
            )}
            {selectedItem === 'Support' && (
              <p>Support Content Goes Here</p>
            )}
            {selectedItem === 'More Info' && (
              <p>More Info Content Goes Here</p>
            )}
            {selectedItem === 'Settings' && (
              <p>Settings Content Goes Here</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
