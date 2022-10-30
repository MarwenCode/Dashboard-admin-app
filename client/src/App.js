import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import SideBar from "./pages/sidebar/SideBar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Products from "./pages/products/Products";
import "./app.scss"
import { AppContext } from "./context/context";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const  {user } = useContext(AppContext)

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<SideBar /> } />
          <Route path="/register" element={user ? <Login /> : <Register /> } />
          <Route path="/products" element={<Products /> }/>
          <Route path="/dashboard" element={<Dashboard /> }/>
            <Route path="/login" element={user ? <Dashboard /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
