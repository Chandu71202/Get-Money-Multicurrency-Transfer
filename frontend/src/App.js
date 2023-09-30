import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login'; // Import the Login component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransferMoney from './components/TransferMoney';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transferMoney' element={<TransferMoney />} />'
        </Routes>
      </Router>
    </div>
  );
}

export default App;
