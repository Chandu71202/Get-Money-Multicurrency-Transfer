import React, { useState } from 'react';
import '../../styles/Home/MyFAQ.css';

const MyFAQ = () => {
  const myFaqs = [
    {
      myQuestion: 'WHAT are we?',
      myAnswer:
        'We are a multi-currency transfer platform that allows you to seamlessly transfer funds between different currencies and accounts, including same currency, different accounts, and even within the same multi-currency account.',
    },
    {
      myQuestion: 'WHY should you use our platform?',
      myAnswer:
        'There are several reasons to choose our platform. We offer competitive exchange rates, low transfer fees, real-time currency conversion, and the convenience of managing multiple currencies in one account. Additionally, our customer support team is available to assist you with any questions or issues, ensuring a smooth and hassle-free experience.',
    },
    {
      myQuestion: 'WHO can use our platform?',
      myAnswer:
        'Our platform is open to anyone who needs to make currency transfers. Whether you are an individual or a business, our service offers competitive exchange rates, low transfer fees, and the flexibility to transfer between a wide range of currencies. We are designed to make currency transfers fast, secure, and cost-effective for everyone.',
    },
    {
      myQuestion: 'WHEN can you use our platform?',
      myAnswer:
        'Our platform is available 24/7, allowing you to initiate currency transfers at your convenience. You can use our service whenever you need to make a transfer, whether it is during business hours or outside regular banking hours.',
    },
    {
      myQuestion: 'WHERE can you use our platform?',
      myAnswer:
        'You can use our platform from anywhere in the world. We support international currency transfers, allowing you to send money to recipients in various countries. Our platform is designed to provide a global solution for your currency transfer needs.',
    },
    {
      myQuestion: 'HOW to use our platform?',
      myAnswer:
        'Using our platform is simple. Just log in to your account, select the source and target currencies, enter the transfer details, and confirm your transaction. Our user-friendly interface makes the process quick and easy.',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMyFAQ = () => {
    setIsOpen(!isOpen);
  };

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={`MyFAQ-container ${isOpen ? 'open' : ''}`}>
      <div className="MyFAQ-header">
        <h2 className="MyFAQ-title">Frequently Asked Questions (FAQs)</h2>
        <button className="MyFAQ-button" onClick={toggleMyFAQ}>
          {isOpen ? 'Hide FAQs' : 'What, Why, Who, When, Where & How? We have got you covered!'}
        </button>
      </div>
      {isOpen && (
        <div className='MyFAQ-content'>
          <div className="MyFAQ-list">
            {myFaqs.map((myFaq, index) => (
              <div className={`MyFAQ-item ${activeIndex === index ? 'open' : ''}`} key={index}>
                <button className="MyFAQ-question" onClick={() => toggleAnswer(index)}>
                  {myFaq.myQuestion}
                </button>
                {activeIndex === index && (
                  <div className="MyFAQ-answer">{myFaq.myAnswer}</div>
                )}
              </div>
            ))}
          </div>
          <div className='MyFAQ-img'>
            <img className='MyFAQ-img-img' src='https://miro.medium.com/v2/resize:fit:828/0*FdLLSjLPudGd-Pt5'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFAQ;
