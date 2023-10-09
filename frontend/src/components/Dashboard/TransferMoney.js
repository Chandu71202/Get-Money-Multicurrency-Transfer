import React, { useState, useEffect } from "react";
import "../../styles/Dashboard/TransferMoney.css";
import axios from "axios";
import Popup from "../Dashboard/Popup";


export default function TransferMoney({ account }) {
  const [senderAmount, setSenderAmount] = useState("");
  const [selectedSenderCurrency, setSelectedSenderCurrency] = useState("GBP");
  const [selectedRecieverCurrency, setSelectedRecieverCurrency] =
    useState("USD");
  const [receiverAccountNumber, setReceiverAccountNumber] = useState();
  const [receiverAmount, setReceiverAmount] = useState("");
  const [feeAmount, setFeeAmount] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const openPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  }; 

  const handleSenderAmountChange = (e) => {
    setSenderAmount(e.target.value);
  };

  const handleReceiverAccountNumber = (e) => {
    setReceiverAccountNumber(e.target.value);
  };

  const handleSelectedSenderCurrencyChange = (e) => {
    setSelectedSenderCurrency(e.target.value);
  };

  const handleSelectedRecieverCurrencyChange = (e) => {
    setSelectedRecieverCurrency(e.target.value);
  };

  const handleReceiverAmountChange = (e) => {
    setReceiverAmount(e.target.value);
  };

  const generateTransactionID = () => {
    const transactionId = Math.floor(1000000 + Math.random() * 90000);
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

  const getExchangeRate = async (
    selectedSenderCurrency,
    selectedRecieverCurrency
  ) => {
    return fetch(`https://open.er-api.com/v6/latest/${selectedSenderCurrency}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rate");
        }
        return response.json();
      })
      .then((data) => {
        const exchangeRate = data.rates[selectedRecieverCurrency];
        if (exchangeRate !== undefined) {
          return exchangeRate.toFixed(4);
        } else {
          return 1.0;
        }
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
        return 1.0;
      });
  };

  const updatingBalance = async (e) => {
    e.preventDefault();
    const allAccountNumbers = [];
    const ApiUrl = "http://localhost:8081/accounts/";
    const response = await axios.get(ApiUrl + "findAllAccountNumbers");
    // setAllAccountNumbers(response.data);
    allAccountNumbers.push(...response.data);
    if (allAccountNumbers.length > 0) {
      if (allAccountNumbers.includes(Number(receiverAccountNumber))) {
        if (account.accountNumber != receiverAccountNumber) {
          if (senderAmount > 0) {
            if (selectedSenderCurrency === "GBP") {
              if (account.balanceGBP >= senderAmount) {
                axios.put(ApiUrl + `${account.id}/updateBalanceGBP`, {
                  balanceGBP: account.balanceGBP - Number(senderAmount),
                });
                openPopup("Transfer Successful");
                const transactionId = generateTransactionID();
                const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                const transaction_array = new Array(
                  `${transactionId}`,
                  `${senderAmount}`,
                  `${selectedSenderCurrency}`,
                  `${selectedRecieverCurrency}`,
                  `${transaction}`,
                  `${
                    account.balanceGBP - senderAmount
                  } ${selectedSenderCurrency}`,
                  timeStamp()
                );
                axios.put(ApiUrl + `${account.id}/addTransaction`, {
                  transaction: transaction_array,
                });
              } else {
                openPopup("Insufficient Balance");
              }
            } else if (selectedSenderCurrency === "USD") {
              if (account.balanceUSD >= senderAmount) {
                axios.put(ApiUrl + `${account.id}/updateBalanceUSD`, {
                  balanceUSD: account.balanceUSD - senderAmount,
                });
                openPopup("Transfer Successful");
                const transactionId = generateTransactionID();
                const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                const transaction_array = new Array(
                  `${transactionId}`,
                  `${senderAmount}`,
                  `${selectedSenderCurrency}`,
                  `${selectedRecieverCurrency}`,
                  `${transaction}`,
                  `${
                    account.balanceUSD - senderAmount
                  } ${selectedSenderCurrency}`,
                  timeStamp()
                );
                axios.put(ApiUrl + `${account.id}/addTransaction`, {
                  transaction: transaction_array,
                });
              } else {
                openPopup("Insufficient Balance");
              }
            } else {
              if (account.balanceEUR >= senderAmount) {
                axios.put(ApiUrl + `${account.id}/updateBalanceEUR`, {
                  balanceEUR: account.balanceEUR - senderAmount,
                });
                openPopup("Transfer Successful");
                const transactionId = generateTransactionID();
                const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                const transaction_array = new Array(
                  `${transactionId}`,
                  `${senderAmount}`,
                  `${selectedSenderCurrency}`,
                  `${selectedRecieverCurrency}`,
                  `${transaction}`,
                  `${
                    account.balanceEUR - senderAmount
                  } ${selectedSenderCurrency}`,
                  timeStamp()
                );
                axios.put(ApiUrl + `${account.id}/addTransaction`, {
                  transaction: transaction_array,
                });
              } else {
                openPopup("Insufficient Balance");
              }
            }
          } else {
            openPopup("Transferring amount must be greater than 0");
          }
        } else {
          if (senderAmount > 0) {
            switch (selectedSenderCurrency) {
              case "GBP":
                if (account.balanceGBP >= senderAmount) {
                  if (selectedRecieverCurrency === "EUR") {
                    axios.patch(
                      ApiUrl + `${account.id}/updateBalanceSameAccount`,
                      {
                        balanceEUR: account.balanceEUR + Number(receiverAmount),
                        balanceGBP: account.balanceGBP - Number(senderAmount),
                      }
                    );

                    openPopup(
                      `Transfer in your own account from ${selectedSenderCurrency} to ${selectedRecieverCurrency} is done`
                    );
                    const transactionId = generateTransactionID();
                    const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                    const transaction_array = new Array(
                      `${transactionId}`,
                      `${senderAmount}`,
                      `${selectedSenderCurrency}`,
                      `${selectedRecieverCurrency}`,
                      `${transaction}`,
                      `${
                        account.balanceGBP - Number(senderAmount)
                      } ${selectedSenderCurrency}`,
                      timeStamp()
                    );
                    axios.put(ApiUrl + `${account.id}/addTransaction`, {
                      transaction: transaction_array,
                    });
                  }
                  if (selectedRecieverCurrency == "USD") {
                    console.log(receiverAmount);
                    axios.patch(
                      ApiUrl + `${account.id}/updateBalanceSameAccount`,
                      {
                        balanceUSD: account.balanceUSD + Number(receiverAmount),
                        balanceGBP: account.balanceGBP - Number(senderAmount),
                      }
                    );

                    openPopup(
                      `Transfer in your own account from ${selectedSenderCurrency} to ${selectedRecieverCurrency} is done`
                    );
                    const transactionId = generateTransactionID();
                    const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                    const transaction_array = new Array(
                      `${transactionId}`,
                      `${senderAmount}`,
                      `${selectedSenderCurrency}`,
                      `${selectedRecieverCurrency}`,
                      `${transaction}`,
                      `${
                        account.balanceGBP - Number(senderAmount)
                      } ${selectedSenderCurrency}`,
                      timeStamp()
                    );
                    axios.put(ApiUrl + `${account.id}/addTransaction`, {
                      transaction: transaction_array,
                    });
                  }
                  if (selectedRecieverCurrency === "GBP") {
                    openPopup("Enter Other Reciever Currency");
                  }
                } else {
                  openPopup("Insufficient Balance");
                }
                break;
              case "USD":
                if (account.balanceUSD >= senderAmount) {
                  if (selectedRecieverCurrency === "EUR") {
                    axios.patch(
                      ApiUrl + `${account.id}/updateBalanceSameAccount`,
                      {
                        balanceEUR: account.balanceEUR + Number(receiverAmount),
                        balanceUSD: account.balanceUSD - Number(senderAmount),
                      }
                    );

                    openPopup(
                      `Transfer in your own account from ${selectedSenderCurrency} to ${selectedRecieverCurrency} is done`
                    );
                    const transactionId = generateTransactionID();
                    const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                    const transaction_array = new Array(
                      `${transactionId}`,
                      `${senderAmount}`,
                      `${selectedSenderCurrency}`,
                      `${selectedRecieverCurrency}`,
                      `${transaction}`,
                      `${
                        account.balanceUSD - Number(senderAmount)
                      } ${selectedSenderCurrency}`,
                      timeStamp()
                    );
                    axios.put(ApiUrl + `${account.id}/addTransaction`, {
                      transaction: transaction_array,
                    });
                  }
                  if (selectedRecieverCurrency == "GBP") {
                    console.log(receiverAmount);
                    axios.patch(
                      ApiUrl + `${account.id}/updateBalanceSameAccount`,
                      {
                        balanceUSD: account.balanceUSD - Number(senderAmount),
                        balanceGBP: account.balanceGBP + Number(receiverAmount),
                      }
                    );

                    openPopup(
                      `Transfer in your own account from ${selectedSenderCurrency} to ${selectedRecieverCurrency} is done`
                    );
                    const transactionId = generateTransactionID();
                    const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                    const transaction_array = new Array(
                      `${transactionId}`,
                      `${senderAmount}`,
                      `${selectedSenderCurrency}`,
                      `${selectedRecieverCurrency}`,
                      `${transaction}`,
                      `${
                        account.balanceUSD - Number(senderAmount)
                      } ${selectedSenderCurrency}`,
                      timeStamp()
                    );
                    axios.put(ApiUrl + `${account.id}/addTransaction`, {
                      transaction: transaction_array,
                    });
                  }
                  if (selectedRecieverCurrency === "USD") {
                    openPopup("Enter Other Reciever Currency");
                  }
                } else {
                  openPopup("Insufficient Balance");
                }
                break;
              case "EUR":
                if (account.balanceEUR >= senderAmount) {
                  if (selectedRecieverCurrency === "GBP") {
                    axios.patch(
                      ApiUrl + `${account.id}/updateBalanceSameAccount`,
                      {
                        balanceEUR: account.balanceEUR - Number(senderAmount),
                        balanceGBP: account.balanceGBP + Number(receiverAmount),
                      }
                    );

                    openPopup(
                      `Transfer in your own account from ${selectedSenderCurrency} to ${selectedRecieverCurrency} is done`
                    );
                    const transactionId = generateTransactionID();
                    const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                    const transaction_array = new Array(
                      `${transactionId}`,
                      `${senderAmount}`,
                      `${selectedSenderCurrency}`,
                      `${selectedRecieverCurrency}`,
                      `${transaction}`,
                      `${
                        account.balanceEUR - Number(senderAmount)
                      } ${selectedSenderCurrency}`,
                      timeStamp()
                    );
                    axios.put(ApiUrl + `${account.id}/addTransaction`, {
                      transaction: transaction_array,
                    });
                  }
                  if (selectedRecieverCurrency == "USD") {
                    console.log(receiverAmount);
                    axios.patch(
                      ApiUrl + `${account.id}/updateBalanceSameAccount`,
                      {
                        balanceUSD: account.balanceUSD + Number(receiverAmount),
                        balanceEUR: account.balanceEUR - Number(senderAmount),
                      }
                    );

                    openPopup(
                      `Transfer in your own account from ${selectedSenderCurrency} to ${selectedRecieverCurrency} is done`
                    );
                    const transactionId = generateTransactionID();
                    const transaction = `An Amount of ${senderAmount} ${selectedSenderCurrency} was transferred to ${receiverAccountNumber} as ${receiverAmount} ${selectedRecieverCurrency}`;
                    const transaction_array = new Array(
                      `${transactionId}`,
                      `${senderAmount}`,
                      `${selectedSenderCurrency}`,
                      `${selectedRecieverCurrency}`,
                      `${transaction}`,
                      `${
                        account.balanceEUR - Number(senderAmount)
                      } ${selectedSenderCurrency}`,
                      timeStamp()
                    );
                    axios.put(ApiUrl + `${account.id}/addTransaction`, {
                      transaction: transaction_array,
                    });
                  }
                  if (selectedRecieverCurrency === "EUR") {
                    openPopup("Enter Other Reciever Currency");
                  }
                } else {
                  openPopup("Insufficient Balance");
                }
                break;
              default:
                openPopup("Invalid Sender Currency");
            }
          } else {
            openPopup("Transferring amount must be greater than 0");
          }
        }
      } else {
        openPopup("Re Check the Reciever Account Number!");
      }
    } else {
      openPopup("AccountNumeber array is less than 0");
    }
  };

  return (
    <div className="signup-container-1">
      <h1 className="heading">Inter-Account Transfer</h1>
      <p style={{ color: "#3c1053", fontSize: "17px" }}>
        For same Account Transfer Enter Your Account Number in Reciever Account
        Number Field
      </p>
      <form className="form-group" onSubmit={updatingBalance}>
        <div className="flex-container">
          <div className="flex-item">
            <label className="form-group-label">Your Account Number</label>
            <input
              className="form-group-input"
              type="number"
              name="senderAccountNumber"
              id="senderAccountNumber"
              value={account.accountNumber}
              disabled
            />
            <label className="form-group-label">
              Receiver's Account Number
            </label>
            <input
              className="form-group-input"
              type="number"
              name="receiverAccountNumber"
              id="receiverAccountNumber"
              value={receiverAccountNumber}
              onChange={handleReceiverAccountNumber}
              required
            />
            <label className="form-group-label">Amount to Send</label>
            <input
              className="form-group-input-amount"
              type="number"
              name="senderAmount"
              id="senderAmount"
              value={senderAmount}
              onChange={handleSenderAmountChange}
              required
            />
            <select
              className="form-group-input-select"
              value={selectedSenderCurrency}
              onChange={handleSelectedSenderCurrencyChange}
              required
            >
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="conversion">
            <p>
              Exact Conversion :{" "}
              {(parseFloat(receiverAmount) + parseFloat(feeAmount)).toFixed(2)}
            </p>
            <p>- Website Fee : {feeAmount}</p>
            <hr></hr>
            <p>= Effective Amount : {receiverAmount} </p>
          </div>
          <label className="form-group-label">The Amount Receiver Gets</label>
          <input
            className="form-group-input-amount"
            type="text"
            id="receiverAmount"
            name="receiverAmount"
            value={receiverAmount}
            onChange={handleReceiverAmountChange}
            disabled
          />
          <select
            className="form-group-input-select"
            value={selectedRecieverCurrency}
            onChange={handleSelectedRecieverCurrencyChange}
            required
          >
            {account.accountNumber == receiverAccountNumber ? (
              <>
                {/* {setSelectedRecieverCurrency("EUR")} */}
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
              </>
            ) : (
              <>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </>
            )}
          </select>
          <button className="transfer-button" type="submit">
            Transfer
          </button>
          {showPopup && <Popup message={popupMessage} onClose={closePopup} />}

        </div>
      </form>
    </div>
  );
}
