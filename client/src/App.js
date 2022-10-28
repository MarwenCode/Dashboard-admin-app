import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Products from "./pages/products/Products";
import "./app.scss"
import { AppContext } from "./context/context";

function App() {
  const  {user } = useContext(AppContext)
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/products" element={<Products /> }/>
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
