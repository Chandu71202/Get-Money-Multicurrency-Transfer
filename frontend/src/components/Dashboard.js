import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import Navbar from "./Navbar";
import * as Ailcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import TransferMoney from "./TransferMoney";

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState("My Account");
  const [username, setUserName] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const settingUserName = async () => {
      axios.get("http://localhost:8080/users/allUsers").then((response) => {
        const users = response.data;
        const user_id = sessionStorage.getItem("id");
        const matchingUser = users.find((user) => user.id === user_id);
        if (matchingUser) {
          setUserName(matchingUser.name);
        }
      });
    };
    settingUserName();
  }, [username]);

  return (
    <div>
      <Navbar />
      <div className="container1">
        <div className="sidebar">
          <div>
            <div
              className={`sidebar-item ${
                selectedItem === "Personal Profile" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Personal Profile")}
            >
              <span className="span">
                <FaIcons.FaUser />
              </span>
              Personal Profile
            </div>

            <div
              className={`sidebar-item ${
                selectedItem === "Your Account" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Your Account")}
            >
              <span className="span">
                <FaIcons.FaMoneyCheckAlt />
              </span>
              Your Account
            </div>
            <div
              className={`sidebar-item ${
                selectedItem === "Inter-Account Transfer" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Inter-Account Transfer")}
            >
              <span className="span">
                <FaIcons.FaExchangeAlt />
              </span>
              Inter-Account Transfer
            </div>
            <div
              className={`sidebar-item ${
                selectedItem === "Depost & Withdraw" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Depost & Withdraw")}
            >
              <span className="span">
                <FaIcons.FaMoneyBillWave />
              </span>
              Depost & Withdraw
            </div>
            <div
              className={`sidebar-item ${
                selectedItem === "Transaction History" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Transaction History")}
            >
              <span className="span">
                <FaIcons.FaHistory />
              </span>
              Transaction History
            </div>
            <div
              className={`sidebar-item ${
                selectedItem === "Support" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Support")}
            >
              <span className="span">
                <FaIcons.FaLifeRing />
              </span>
              Support
            </div>
            <div
              className={`sidebar-item ${
                selectedItem === "More Info" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("More Info")}
            >
              <span className="span">
                <FaIcons.FaInfoCircle />
              </span>
              More Info
            </div>
            <div
              className={`sidebar-item ${
                selectedItem === "Settings" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("Settings")}
            >
              <span className="span">
                <FaIcons.FaCogs />
              </span>
              Settings
            </div>
          </div>
        </div>
        <div className="main-content1">
          <h1>
            Hi <u>{username}</u>! Welcome to Your Personal Dashboard
          </h1>
          <div className="content">
            {selectedItem === "Personal Profile" && (
              // <CurrentExchangeRates />
              <p>dsfs</p>
            )}
            {selectedItem === "Inter-Account Transfer" && <TransferMoney />}
            {selectedItem === "Your Account" && (
              <p>Your Account Content Goes Here</p>
            )}
            {selectedItem === "Depost & Withdraw" && (
              <p>Depost & Withdraw Content Goes Here</p>
            )}
            {selectedItem === "Transaction History" && (
              <p>Transaction History Content Goes Here</p>
            )}
            {selectedItem === "Support" && <p>Support Content Goes Here</p>}
            {selectedItem === "More Info" && <p>More Info Content Goes Here</p>}
            {selectedItem === "Settings" && <p>Settings Content Goes Here</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
