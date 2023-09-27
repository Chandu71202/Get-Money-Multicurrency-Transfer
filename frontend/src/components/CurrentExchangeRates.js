import React, { useState, useEffect } from "react";
import "../styles/CurrentExchangeRates.css"

export default function CurrentExchangeRates() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [exchangeRates1, setExchangeRates1] = useState({});
  const [exchangeRates2, setExchangeRates2] = useState({});
  const [exchangeRates3, setExchangeRates3] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    // Function to fetch exchange rates
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://open.er-api.com/v6/latest/${baseCurrency}`
        );
        const response1 = await fetch(`https://open.er-api.com/v6/latest/GBP`);
        const response2 = await fetch(`https://open.er-api.com/v6/latest/USD`);
        const response3 = await fetch(`https://open.er-api.com/v6/latest/EUR`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        setExchangeRates(data.rates);
        setExchangeRates1(data1.rates);
        setExchangeRates2(data2.rates);
        setExchangeRates3(data3.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  useEffect(() => {
    // Calculate the result
    if (exchangeRates[targetCurrency]) {
      setResult(amount * exchangeRates[targetCurrency]);
    }
  }, [exchangeRates, targetCurrency, amount]);

  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="currency-converter-card">
      <h1>Current Exchange Rates</h1>
      <div>
        <p>GBP to USD: {exchangeRates1.USD?.toFixed(4)}</p>
        <p>GBP to EUR: {exchangeRates1.EUR?.toFixed(4)}</p>
        <p>USD to GBP: {exchangeRates2.GBP?.toFixed(4)}</p>
        <p>USD to EUR: {exchangeRates2.EUR?.toFixed(4)}</p>
        <p>EUR to GBP: {exchangeRates3.EUR?.toFixed(4)}</p>
        <p>EUR to USD: {exchangeRates3.USD?.toFixed(4)}</p>
      </div>
      <div>
        <label>Try Yourself Out!</label>
        <input type="number" className="styled-input" value={amount} onChange={handleAmountChange} />
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <span>to</span>
        <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <p>
          {baseCurrency} to {targetCurrency}: {result.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
