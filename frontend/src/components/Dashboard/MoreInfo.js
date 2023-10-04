import React, { useState } from "react";
import "../../styles/Dashboard/MoreInfo.css";

export default function MoreInfo() {
  const faqs = [
    {
      question: "What is the base currency requirement?",
      answer:
        "The base currency is the currency from which you are making the transfer. To perform a transfer within the same multi-currency account, the base currency used for the transaction must be one of the currencies available within that multi-currency account. In other words, you can only initiate transfers from one of the currencies you already hold in your multi-currency account.",
    },
    {
      question: "What is an exotic currency target?",
      answer:
        "The target currency is the currency to which you are transferring the funds. In this context, the target currency must be an exotic currency, which means it should not be one of the commonly used currencies like GBP (British Pound), USD (United States Dollar), or EUR (Euro). Instead, it should be a less common or more specialized currency.",
    },
    {
      question: "How do I select the base currency for a transfer?",
      answer:
        "When initiating a transfer, you can select the base currency from the list of currencies available in your multi-currency account. Make sure to choose a currency that you already hold in your account.",
    },
    {
      question: "Can I transfer funds between different multi-currency accounts?",
      answer:
        "Yes, you can transfer funds between different multi-currency accounts as long as the base currency you select for the transfer is available in both accounts.",
    },
    {
      question: "Are there any fees associated with currency transfers?",
      answer:
        "The fees for currency transfers may vary depending on the amount, currency, and destination. Please check our fee schedule for detailed information on transfer fees.",
    },
    {
      question: "What is the processing time for currency transfers?",
      answer:
        "The processing time for currency transfers can vary based on several factors, including the destination country and the receiving bank. Typically, transfers within the same multi-currency account are processed instantly.",
    },
    {
      question: "Is there a limit to the amount I can transfer between currencies?",
      answer:
        "Yes, there may be limits on the amount you can transfer between currencies. These limits can vary based on your account type and currency pair. Please refer to our transfer limits for more information.",
    },
    {
      question: "Can I cancel or modify a currency transfer after initiating it?",
      answer:
        "Once a currency transfer is initiated, it may not be possible to cancel or modify it. However, please contact our support team for assistance, and we will do our best to help you.",
    },
    {
      question: "How can I track the status of my currency transfer?",
      answer:
        "You can track the status of your currency transfer by logging into your account and navigating to the 'Transfer History' section. There, you will find details on the status and progress of your transfer.",
    },
    {
      question: "What should I do if I encounter an issue with a currency transfer?",
      answer:
        "If you encounter any issues with a currency transfer, such as delays or discrepancies, please contact our customer support team immediately. We are here to assist you and resolve any issues promptly.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="centered-content"> {/* Centered container */}
      <div className="more-info-container">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-button" onClick={() => toggleAnswer(index)}>
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
