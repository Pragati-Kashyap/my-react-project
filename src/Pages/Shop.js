import React from "react";
import ShopNav from "../Components/Shop/ShopNav";
import ShopProducts from "../Components/Shop/ShopProducts";
import ShopProductsNav from "../Components/Shop/ShopProuctsNav";
import Footer from "../Components/Footer/Footer";
import "../styles/shop.css"

export default function ShopPage(){
    return (
        <>
            <ShopNav />
            <ShopProductsNav />
            <ShopProducts />
            <Footer />
        </>
    )
}