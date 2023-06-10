import React from "react";
import About from "../Components/About/About";
import HomeNav from "../Components/Home/HomeNav";
import Services from "../Components/Services/Services";
import Facts from "../Components/Home/Facts";
import Team from "../Components/Home/Team";
import Footer from "../Components/Footer/Footer";
import "../styles/facts.css"

export default function AboutPage(){
    return(
        <>
        <HomeNav />
        <About></About>
        <Services></Services>
        <Facts />
        <Team />
        <Footer />
        </>
    )
}