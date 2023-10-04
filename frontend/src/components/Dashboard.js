import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import Navbar from "./Navbar";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

import CreateAccount from "./Dashboard/CreateAccount";
import PersonalProfile from "./Dashboard/PersonalProfile";
import YourAccount from "./Dashboard/YourAccount";
import TransferMoney from "./Dashboard/TransferMoney";
import DepositWithdraw from "./Dashboard/DepositWithdraw";
import TransactionHistory from "./Dashboard/TransactionHistory";
import Support from "./Dashboard/Support";
import MoreInfo from "./Dashboard/MoreInfo";
import Settings from "./Dashboard/Settings";
import DashboardInitial from "./Dashboard/DashboardInitial";
import Footer from "./Footer";

export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState("My Account");
  const [username, setUserName] = useState("");
  const [hasAccount, setHasAccount] = useState(true);
  const [account, setAccount] = useState([])
  const [user, setUser] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const updateHasAccount = (value) => {
    setHasAccount(value);
  };

  const settingUserName = async () => {
    await axios.get("http://localhost:8080/users/allUsers").then((response) => {
      const users = response.data;
      const user_id = sessionStorage.getItem("id");
      const matchingUser = users.find((user) => user.id === user_id);
      setUser(matchingUser);
      if (matchingUser) {
        setUserName(matchingUser.name);
      }
    });
  };

  useEffect(() => {
    settingUserName();
  },[]);

  const settingHasAccount= async () =>{
    const user_id = sessionStorage.getItem("id");
    await axios.get(`http://localhost:8081/accounts/findUserById/${user_id}`).then((response) => {
      if (response.data.id === user_id) {
        setHasAccount(true);
        setAccount(response.data);
      } else {
        setHasAccount(false);
      }
    });
  }

  useEffect(() => {
    settingHasAccount();
  }, [account]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div>
      <Navbar />
      {hasAccount ? (
        <div className="container1">
          <div className="whole-sidebar">
            <div className="sidebar-toggle" onClick={toggleSidebar}>
              <span className={`toggle-icon  ${isSidebarOpen ? "open" : ""}`}>&#9776;</span>
            </div>

            <div className={`sidebar ${isSidebarOpen ? "" : "sidebar-closed"}`}>
              <div
                className={`sidebar-item ${selectedItem === "Personal Profile" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("Personal Profile")}
              >
                <span className="span">
                  <FaIcons.FaUser />
                </span>
                Personal Profile
              </div>

              <div
                className={`sidebar-item ${selectedItem === "Your Account" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("Your Account")}
              >
                <span className="span">
                  <FaIcons.FaMoneyCheckAlt />
                </span>
                Your Account
              </div>
              <div
                className={`sidebar-item ${selectedItem === "Inter-Account Transfer" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("Inter-Account Transfer")}
              >
                <span className="span">
                  <FaIcons.FaExchangeAlt />
                </span>
                Inter-Account Transfer
              </div>
              <div
                className={`sidebar-item ${selectedItem === "Depost & Withdraw" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("Depost & Withdraw")}
              >
                <span className="span">
                  <FaIcons.FaMoneyBillWave />
                </span>
                Depost & Withdraw
              </div>
              <div
                className={`sidebar-item ${selectedItem === "Transaction History" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("Transaction History")}
              >
                <span className="span">
                  <FaIcons.FaHistory />
                </span>
                Transaction History
              </div>
              <div
                className={`sidebar-item ${selectedItem === "Support" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("Support")}
              >
                <span className="span">
                  <FaIcons.FaLifeRing />
                </span>
                Support
              </div>
              <div
                className={`sidebar-item ${selectedItem === "More Info" ? "selected" : ""
                  }`}
                onClick={() => handleItemClick("More Info")}
              >
                <span className="span">
                  <FaIcons.FaInfoCircle />
                </span>
                More Info
              </div>
              <div
                className={`sidebar-item ${selectedItem === "Settings" ? "selected" : ""
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
              <div className="content">
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    fontSize: "30px",
                    color: "#3c1053",
                  }}
                >
                  Hi <u>{username ? ( <>{username}</>) : (<>{"Loading"}</>)}</u>! Welcome to Your Personal Dashboard
                </h1>
                
                {selectedItem !== "Personal Profile" && 
                selectedItem !== "Inter-Account Transfer" && 
                selectedItem !== "Your Account" &&
                selectedItem !== "Depost & Withdraw" &&
                selectedItem !== "Transaction History" &&
                selectedItem !== "Support" &&
                selectedItem !== "More Info" &&
                selectedItem !== "Settings"
                &&  <DashboardInitial/>}
                {selectedItem === "Personal Profile" && (
                  <PersonalProfile account={account} user={user} />
                )}
                {selectedItem === "Inter-Account Transfer" && <TransferMoney account={account} />}
                {selectedItem === "Your Account" && (
                  <YourAccount account={account} />
                )}
                {selectedItem === "Depost & Withdraw" && (
                  <DepositWithdraw account={account} />
                )}
                {selectedItem === "Transaction History" && (
                  <TransactionHistory account={account} />
                )}
                {selectedItem === "Support" && <Support />}
                {selectedItem === "More Info" && (
                  <MoreInfo />
                )}
                {selectedItem === "Settings" && (
                  <Settings account={account} user={user}/>
                )}
              </div>
            </div>
          
        </div>
      ) : (
        <div>
          <h1
            style={{
              textAlign: "center",
              padding: "10px",
              fontSize: "30px",
              backgroundColor:"#56595f2e"
            }}
          >
            Hi <u>{username ? ( <>{username}</>) : (<>{"Loading"}</>)}</u>! Welcome to Your Personal Dashboard
          </h1>
          <CreateAccount updateHasAccount={updateHasAccount} />
        </div>
      )}
<Footer/>
    </div>

  );
}
