import React from "react";
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Logout from './Components/Logout'
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Services from "./Components/Services";
import About from "./Components/About";
import PortfolioNav from "./Components/Portfolio";
import Products from "./Components/Products";
import BasicExample from "./Components/Cards";
import Newsletter from "./Components/Newsletter";
import Forms from "./Components/Form";
import Footer from "./Components/Footer";
import ScrollButton from "./Components/ScrollButton";
import "./App.css";


function App() {
 
  return (
    <div className="App">
      <Navbar />
   
        <Routes>
          <Route exact path = "/login" element = {<LoginForm/>} />
        </Routes>
   
      <Header />
      <Services />
      <About />
      <PortfolioNav />
      <Products />
      <BasicExample />
      <Newsletter />
      <Forms />
      <Footer />
      <ScrollButton />   
    </div>
  );
}

export default App;
