import React from "react";
import Navbar from "../components/Navbar";
import FinanceDetails from "../components/details/FinanceDetails";


const FinancePage = () => {


  
    return (
        <div className="container">
            <div className="main m-0 p-0 bg-tailtertiary">
                <Navbar pagename="Finance Manager Page" pagenumber="124"/>
                <FinanceDetails/>
            </div>
        </div>
    );
};

export default FinancePage;
