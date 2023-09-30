import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; // Import the Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import TransferMoney from "./components/TransferMoney";
import ErrorHandling from "./components/ErrorHandling";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {isAuthenticated ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/dashboard" element={<ErrorHandling />} />
          )}
          <Route path="/transferMoney" element={<TransferMoney />} />'
        </Routes>
      </Router>
    </div>
  );
}

export default App;
