import React from "react";
import Navbar from "../components/Navbar";
import ProductDetails from "../components/details/ProductDetails";

const ProductPage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0 bg-tailtertiary">
                <Navbar pagename="View Product Page" pagenumber="111"/>
                <ProductDetails/>
            </div>
        </div>
    );
};

export default ProductPage;
