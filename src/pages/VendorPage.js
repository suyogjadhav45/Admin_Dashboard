import React from "react";
import Navbar from "../components/Navbar";
import VendorDetails from "../components/details/VendorDetails";
const VendorPage = () => {



  return (
    <div className="container">
      <div className="main m-0 p-0 bg-tailtertiary">
        <Navbar pagename="View Vendors Page" pagenumber="125" />
        <VendorDetails />
      </div>
    </div>
  );
};

export default VendorPage;
