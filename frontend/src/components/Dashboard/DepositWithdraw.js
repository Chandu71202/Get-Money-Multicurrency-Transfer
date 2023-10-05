import React, { useState } from "react";
import axios from "axios";
import "../../styles/Dashboard/DepositWithdraw.css";

export default function DepositWithdraw({ account }) {
  const [currency, setCurrency] = useState("GBP");
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const [card, setCard] = useState({
    cardNumber: "",
    expiration: "",
    cvv: "",
    amount: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    const id = sessionStorage.getItem("id");
    const ApiUrl = "http://localhost:8081/accounts/";
    console.log(currency, card.amount);
    if (card.amount > 0) {
      if (currency === "GBP") {
        axios.put(ApiUrl + `${id}/updateBalanceGBP`, {
          balanceGBP: account.balanceGBP + Number(card.amount),
        });
      } else if (currency === "USD") {
        axios.put(ApiUrl + `${id}/updateBalanceUSD`, {
          balanceUSD: account.balanceUSD + Number(card.amount),
        });
      } else {
        axios.put(ApiUrl + `${id}/updateBalanceEUR`, {
          balanceEUR: account.balanceEUR + Number(card.amount),
        });
      }
      alert(
        `Deposit Succesful of an amount of ${card.amount} into your ${currency} account`
      );
    } else {
      alert("Deposit Amount must be greater than 0");
    }
  };

  return (
    <div className="signup-container-1">
      <h1 className="heading">Deposit Money into your account</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="flex-container">
          <div className="flex-item">
            <label className="form-group-label">Card Number</label>
            <input
              className="form-group-input"
              type="number"
              name="cardNumber"
              id="cardNumber"
              value={card.accountNumber}
              onChange={handleChanges}
              required
            />
            <label className="form-group-label">Expiration</label>
            <input
              className="form-group-input"
              type="text"
              name="expiration"
              id="expiration"
              value={card.expiration}
              onChange={handleChanges}
              required
            />
            <label className="form-group-label">CVV</label>
            <input
              className="form-group-input"
              type="number"
              name="cvv"
              id="cvv"
              value={card.cvv}
              onChange={handleChanges}
              required
            />
            <label className="form-group-label">Amount to Send</label>
            <input
              className="form-group-input-amount"
              type="number"
              name="amount"
              id="amount"
              value={card.amount}
              onChange={handleChanges}
              required
            />
            <select
              className="form-group-input-select"
              value={currency}
              onChange={handleCurrencyChange}
              required
            >
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <button className="transfer-button" type="submit">
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
}
