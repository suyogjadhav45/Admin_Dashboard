import React from "react";
import Navbar from "../components/Navbar";
import CustomerDetails from "../components/details/CustomerDetails";


const CustomerPage = () => {

    return (
        <div className="container">
            <div className="main m-0 p-0 bg-tailtertiary">
                <Navbar pagename="Customer Page" pagenumber="126" />
                <CustomerDetails/>
            </div>
        </div>
    );
};

export default CustomerPage;
