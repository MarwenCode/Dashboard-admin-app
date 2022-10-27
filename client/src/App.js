import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import "./app.scss"

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register /> } />
            <Route path="/login" element={<Login /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
