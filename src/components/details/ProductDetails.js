import React from "react";
import "./Orders.css";
import Modal from "../Modal";
import ViewSingleProduct from "../viewsingle/ViewSingleProduct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductDetails = () => {


  const navigate = useNavigate();

  // AllCustomers Array
  const [AllProducts, setAllProducts] = useState([]);


  // getproducts api
  const getProducts = async () => {
    const response = await fetch(`https://adminlm.onrender.com/api/product/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    setAllProducts(json);
  }

  const [deletehook, setdeletehook] = useState(false)

  const onDelete = (id, event) => {
    event.preventDefault();
    console.log(id);
    axios.delete(`https://adminlm.onrender.com/api/product/${id}`)
      .then((response) => {
        console.log(response);
        console.log('\ndeleted');
        setdeletehook(!deletehook);
      })
      .catch((error) => console.log(error))
  }

  const [catarray, setcatarray] = React.useState([]);
  const getCatArray = async () => {
    const response = await fetch(`https://adminlm.onrender.com/api/category/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    setcatarray(json);
    // console.log(json)
  }




  useEffect(() => {
    getProducts();
    getCatArray();
  }, []);

  useEffect(() => {
    getProducts();
  }, [deletehook]);



  return (
    <div className={AllProducts.length < 10 ? "queue-page h-screen border-2 rounded-md bg-tailtertiary m-0" : "queue-page border-2 rounded-md bg-tailtertiary m-0"}>

      <div className="orders-container">
        <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>PRODUCT ID</h2>
          <h2>PRODUCT NAME</h2>
          <h2>OPTIONS</h2>
        </div>
        {AllProducts.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>Product #{e.id}</h2>
            <p>{e.productname}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<ViewSingleProduct obj={e} catarray={catarray} />} />
              <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-tailtertiary3 text-black" onClick={() => navigate("/dashboard/editproduct", { state: { obj: { e } } })}>EDIT</button>
              <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-red-500 text-black" onClick={(event) => onDelete(e.id, event)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
