import React from "react";
import "../../styles/Dashboard/PopUp.css";

const PopUp = (props) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p className="msg">{props.message}</p>
        <button className="close-btn" onClick={props.onClose}>
          ok
        </button>
      </div>
    </div>
  );
};

export default PopUp;
