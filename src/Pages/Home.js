import { React, useState } from "react";
import Navbar from "../Components/Home/Navbar";
import Header from "../Components/Home/Header";
import Services from "../Components/Services/Services";
import About from "../Components/About/About";
import PortfolioNav from "../Components/Portfolio/Portfolio";
import Products from "../Components/Portfolio/Products";
import Cards from "../Components/Cards/Cards";
import Newsletter from "../Components/Form/Newsletter";
import Forms from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import ScrollButton from "../Components/ScrollButton/ScrollButton";

export default function HomePage() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <About />
      <PortfolioNav />
      <Products cartItems={cartItems} />
      <Cards />
      <Newsletter />
      <Forms />
      <Footer />
      <ScrollButton />
    </div>
  );
}
