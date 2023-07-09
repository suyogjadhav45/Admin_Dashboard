import React from "react";
import Navbar from "../components/Navbar";
import DeliveryDetails from "../components/details/DeliveryDetails";

const DeliveryPage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0 bg-tailtertiary">
                <Navbar pagename="Delivery Agents Page" pagenumber="122" />
                <DeliveryDetails/>
            </div>
        </div>
    );
};

export default DeliveryPage;
