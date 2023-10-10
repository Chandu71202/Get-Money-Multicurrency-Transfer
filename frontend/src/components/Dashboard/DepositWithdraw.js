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
    name: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value,
    });
  };

  const generateTransactionID = () => {
    const transactionId = Math.floor(3000000 + Math.random() * 90000);
    return transactionId;
  };

  const timeStamp = () => {
    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const dateString =
      currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
    return dateString;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    const id = sessionStorage.getItem("id");
    const ApiUrl = "http://localhost:8081/accounts/";
    if (card.cardNumber.length !== 16) {
      alert("Card Number must be 16 digits long");
      return;
    }
    if (card.expiration.length !== 5) {
      alert("Expiration must be 5 digits long");
      return;
    }
    if (card.cvv.length !== 3) {
      alert("CVV must be 3 digits long");
      return;
    }
    if (card.amount > 0) {
      if (currency === "GBP") {
        axios
          .put(ApiUrl + `${id}/updateBalanceGBP`, {
            balanceGBP: account.balanceGBP + Number(card.amount),
          })
          .then(() => {
            const transactionId = generateTransactionID();
            const transaction_array = new Array(
              `${transactionId}`,
              `${card.amount}`,
              `${currency}(self)`,
              `${currency}(self)`,
              `Self-Transfer GBP`,
              `${account.balanceGBP + Number(card.amount)} ${currency}`,
              timeStamp(),
            );
            axios.put(ApiUrl + `${account.id}/addTransaction`, {
              transaction: transaction_array,
            });
          });
      } else if (currency === "USD") {
        axios
          .put(ApiUrl + `${id}/updateBalanceUSD`, {
            balanceUSD: account.balanceUSD + Number(card.amount),
          })
          .then(() => {
            const transactionId = generateTransactionID();
            const transaction_array = new Array(
              `${transactionId}`,
              `${card.amount}`,
              `${currency}(self)`,
              `${currency}(self)`,
              `Self-Transfer USD`,
              `${account.balanceUSD + Number(card.amount)} ${currency}`,
              timeStamp(),
            );
            axios.put(ApiUrl + `${account.id}/addTransaction`, {
              transaction: transaction_array,
            });
          });
      } else {
        axios
          .put(ApiUrl + `${id}/updateBalanceEUR`, {
            balanceEUR: account.balanceEUR + Number(card.amount),
          })
          .then(() => {
            const transactionId = generateTransactionID();
            const transaction_array = new Array(
              `${transactionId}`,
              `${card.amount}`,
              `${currency}(self)`,
              `${currency}(self)`,
              `Self-Transfer EUR`,
              `${account.balanceEUR + Number(card.amount)} ${currency}`,
              timeStamp(),
            );
            axios.put(ApiUrl + `${account.id}/addTransaction`, {
              transaction: transaction_array,
            });
          });
      }
      alert(
        `Deposit Succesful of an amount of ${card.amount} into your ${currency} account`,
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
              placeholder="mm/yy"
              required
            />
            <label className="form-group-label">CVV</label>
            <input
              className="form-group-input"
              type="password"
              name="cvv"
              id="cvv"
              value={card.cvv}
              onChange={handleChanges}
              required
            />
            <label className="form-group-label">Name on Card</label>
            <input
              className="form-group-input"
              type="text"
              name="name"
              id="name"
              value={card.name}
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
