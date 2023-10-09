import React from 'react';
import '../../styles/Dashboard/Popup.css';

const Popup = (props) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p className='msg'>{props.message}</p>
        <button className="close-btn" onClick={props.onClose}>
          ok
        </button>
      </div>
    </div>
  );
};

export default Popup;
