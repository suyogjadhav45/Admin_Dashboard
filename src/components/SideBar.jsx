import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import MyNavitem from "./MyNavitem";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const navigate = useNavigate();

  // return components
  return (
    <>
      <div className="bg-white scrolling text-black">
        <div className="main-container">
          <motion.div
            animate={{
              width: "290px",
              height: "h-screen",
            }}
            className={`sidebar pr-4`}
          >
            <div className="top_section">
              <h2 className="py-8 px-6 w-full border-2 border-blue-500 font-bold rounded-sm text-center bg-tailtertiary3 text-black flex">
                ADMIN DASHBOARD
              </h2>
            </div>

            {/* Home and Logout button */}
            <div>
              <div className="flex justify-center px-2 text-black font-bold">
                <button
                  className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm"
                  onClick={() => navigate("/dashboard/home")}
                >
                  HOME
                </button>
                <button
                  className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
                  onClick={() => navigate("/")}
                >
                  LOGOUT
                </button>
              </div>
            </div>

            {/* routes */}
            <section className="routes">

              {/* Add Product Menu */}
              <h2 className="border-2 border-black justify-center flex mx-1 py-2 bg-tailtertiary justify-center">
                Product Menu
              </h2>

              {/* Category */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addcategory"
                        routename="Add Category"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editcategory"
                        routename="Edit Category"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Subcategory */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sub-Category
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addsubcategory"
                        routename="Add SubCategory"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editsubcategory"
                        routename="Edit SubCategory"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>


              {/* Brand */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brand
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/addbrand"
                        routename="Add Brand"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/editbrand"
                        routename="Edit Brand"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>



              {/* UOM */}
              <div className="dropdown">
                <button
                  className="btnclass btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  UOM
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/AddUom"
                        routename="Add UOM"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      <MyNavitem
                        path="/dashboard/EditUom"
                        routename="Edit UOM"
                        icon={<GrAddCircle />}
                      />
                    </Link>
                  </li>
                </ul>
              </div>


              {/* Product */}
              <MyNavitem
                path="/dashboard/addproduct"
                routename="Add Product"
                icon={<GrAddCircle />}
              />

              {/* <MyNavitem
                path="/dashboard/viewproducts"
                routename="View/Edit/Delete Products"
                icon={<VscPreview />}
              /> */}


              {/* ADD ROLE MENU */}
              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                Add Role Menu
              </h2>

              {/* Delivery Agent */}
              <MyNavitem
                path="/dashboard/adddeliveryagent"
                routename="Delivery Agent"
                icon={<GrAddCircle />}
              />
              {/* Inventory Manager */}
              <MyNavitem
                path="/dashboard/addinventorymanager"
                routename="Inventory Manager"
                icon={<GrAddCircle />}
              />

              {/* Vendor */}
              <MyNavitem
                path="/dashboard/addvendor"
                routename="Vendor"
                icon={<GrAddCircle />}
              />


              {/* Finance Manager */}
              <MyNavitem
                path="/dashboard/addfinancemanager"
                routename="Finance Manager"
                icon={<GrAddCircle />}
              />

              {/* Customer */}
              <MyNavitem
                path="/dashboard/addcustomer"
                routename="Customer"
                icon={<GrAddCircle />}
              />




              <h2 className="border-2 border-black justify-center flex  mx-1 py-2 bg-tailtertiary justify-center">
                View Edit Delete Menu
              </h2>
              <MyNavitem
                path="/dashboard/viewproducts"
                routename="Products"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewdeliveryagents"
                routename="Delivery Agents"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewinventorymanagers"
                routename="Inventory Managers"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewvendors"
                routename="Vendors"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewfinancemanagers"
                routename="Finance Managers"
                icon={<VscPreview />}
              />
              <MyNavitem
                path="/dashboard/viewcustomers"
                routename="Customers"
                icon={<VscPreview />}
                className=""
              />
            </section>
          </motion.div>

          <main>{children}</main>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;