import { React, useState} from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Home/LoginForm";
import HomePage from "./Pages/Home";
import "./App.css";
import "./styles/form.css"
import AboutPage from "./Pages/About";
import ShopPage from "./Pages/Shop";
import ContactPage from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Cart from "./Components/Portfolio/Cart";


function App() {
 
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
}
export default App;
