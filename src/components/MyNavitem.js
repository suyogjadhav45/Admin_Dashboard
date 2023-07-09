import React from 'react'
import { NavLink } from 'react-router-dom'


export default function MyNavitem({ path, icon, routename }) {
    return (
        <NavLink
            to={path}
            className="link transition duration-300 mx-1 ease-in-out hover:scale-110 ml-1 mb-1"
            activeClassName="active"
        >
            <div className="icon">{icon}</div>
            {/* <AnimatePresence> */}

            <div
                className="link_text"
            >
                {routename}

            </div>
            {/* </AnimatePresence> */}
        </NavLink>

    )
}




// const routes = [
//     {
//       path: "/dashboard/home",
//       name: "Home",
//       icon: <FaHome />,
//     },
//     {
//       path: "/products",
//       name: "Products",
//       icon: <MdProductionQuantityLimits />,
//       subRoutes: [
//         {
//           path: "/dashboard/addcategory",
//           name: "Add Category ",
//           icon: <GrAddCircle />,
//         },
//         {
//           path: "/dashboard/addsubcategory",
//           name: "Add SubCategory",
//           icon: <GrAddCircle />,
//         },
//         {
//           path: "/dashboard/addproduct",
//           name: "Add Product",
//           icon: <GrAddCircle />,
//         },
//       ],
//     },
//     {
//       path: "/dashboard/viewproducts",
//       name: "View Products",
//       icon: <VscPreview />,
//     },
//     {
//       path: "/delivery",
//       name: "Delivery Agent",
//       icon: <MdDeliveryDining />,
//       subRoutes: [
//         {
//           path: "/dashboard/adddeliveryagent",
//           name: "Add Delivery Agent ",
//           icon: <GrAddCircle />,
//         },
//         {
//           path: "/dashboard/viewdeliveryagents",
//           name: "View Delivery Agents",
//           icon: <VscPreview />,
//         },
//       ],
//     },
//     {
//       path: "/inventory",
//       name: "Inventory Manager",
//       icon: <MdOutlineInventory2 />,
//       subRoutes: [
//         {
//           path: "/dashboard/addinventorymanager",
//           name: "Add Inventory Manager",
//           icon: <GrAddCircle />,
//         },
//         {
//           path: "/dashboard/viewinventorymanagers",
//           name: "View Inventory Manager",
//           icon: <VscPreview />,
//         },
//       ],
//     },
//     {
//       path: "/dashboard/vieworders",
//       name: "Order",
//       icon: <BsCartCheck />,
//     },
//   ];