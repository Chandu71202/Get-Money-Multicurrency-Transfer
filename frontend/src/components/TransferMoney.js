import React, { useState, useEffect } from "react";
import "../styles/TransferMoney.css";

export default function TransferMoney() {
  const [senderAmount, setSenderAmount] = useState("");
  const [selectedSenderCurrency, setSelectedSenderCurrency] = useState("GBP");
  const [selectedRecieverCurrency, setselectedRecieverCurrency] = useState("USD");
  const [receiverAmount, setReceiverAmount] = useState("");
  const [feeAmount, setFeeAmount] = useState("");

  const currencies = [
    "INR",
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BRL",
    "BSD",
    "BTN",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CRC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "FOK",
    "GBP",
    "GEL",
    "GGP",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "IMP",
    "IQD",
    "IRR",
    "ISK",
    "JEP",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KID",
    "KMF",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLE",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TVD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "UYU",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XCD",
    "XDR",
    "XOF",
    "XPF",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL",
  ].sort();

  useEffect(() => {
    const calculateReceiverAmount = async () => {
      const exchangeRate = await getExchangeRate(
        selectedSenderCurrency,
        selectedRecieverCurrency
      );
      const calculatedReceiverAmount = senderAmount * exchangeRate;
      const fee = calculatedReceiverAmount * 0.05; // Calculate the fee (5% of receiver amount)
      const finalReceiverAmount = calculatedReceiverAmount - fee; // Deduct the fee
      setReceiverAmount(finalReceiverAmount.toFixed(2)); // Limit to 2 decimal places
      setFeeAmount(fee.toFixed(2)); // Set the fee amount
    };

    calculateReceiverAmount();
  }, [senderAmount, selectedSenderCurrency, selectedRecieverCurrency]);


  // Function to get exchange rates for different currencies
  const getExchangeRate = async (selectedSenderCurrency, selectedRecieverCurrency) => {
    return fetch(`https://open.er-api.com/v6/latest/${selectedSenderCurrency}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate');
        }
        return response.json();
      })
      .then((data) => {
        const exchangeRate = data.rates[selectedRecieverCurrency];
        if (exchangeRate !== undefined) {
          console.log(exchangeRate.toFixed(4));
          console.log(senderAmount);
          return exchangeRate.toFixed(4);
        } else {
          return 1.0; 
        }
      })
      .catch((error) => {
        console.error('Error fetching exchange rate:', error);
        return 1.0; 
      });
  };
  

  return (
    <div>
      <div className="card">
        <form className="form-group">
          <div className="flex-container">
            <div className="flex-item">
            <label className="form-group-label">Receiver's Account Number</label>
              <input
                className="form-group-input"
                type="number"
                name="recieverAccountNumber"
                id="recieverAccountNumber"
                // value={recieverAccountNumber}
              />
              <label className="form-group-label">Amount to Send</label>
              <input
                className="form-group-input"
                type="number"
                name="senderAmount"
                id="senderAmount"
                value={senderAmount}
                onChange={(e) => setSenderAmount(e.target.value)}
              />

              <select
                value={selectedSenderCurrency}
                onChange={(e) => setSelectedSenderCurrency(e.target.value)}
              >
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          <p>Exact Currency Change : {(parseFloat(receiverAmount) + parseFloat(feeAmount)).toFixed(2)}</p>
          <p>- Fee: {feeAmount}</p>
          <p>= Resultant : {receiverAmount} </p>
          <label className="form-group-label">The Amount Receiver Gets</label>
          <input
            className="form-group-input"
            type="text"
            id="receiverAmount"
            name="receiverAmount"
            value={receiverAmount}
            disabled
          />

          <select
            value={selectedRecieverCurrency}
            onChange={(e) => setselectedRecieverCurrency(e.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <button className="transfer-button" type="submit">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
}
