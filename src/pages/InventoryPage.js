import React from "react";
import Navbar from "../components/Navbar";
import InventoryDetails from "../components/details/InventoryDetails";

const InventoryPage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0 bg-tailtertiary">
                <Navbar pagename="Inventory Manager Page" pagenumber="123" />
                <InventoryDetails/>
            </div>
        </div>
    );
};

export default InventoryPage;
