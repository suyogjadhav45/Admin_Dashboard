import React, { useState, useEffect } from "react";
import "./Orders.css";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewSingleRole from "../viewsingle/ViewSingleRole";



const InventoryDetails = () => {
  const navigate = useNavigate();


  // AllInventoryManager Array
  const [AllInventoryManagers, setAllInventoryManagers] = useState([]);

  const getInventoryManagers = async () => {
    const response = await fetch(`https://adminlm.onrender.com/api/invman/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    setAllInventoryManagers(json);
  }

  const [deletehook, setdeletehook] = useState(false)


  const onDelete = (id, event) => {
    event.preventDefault();
    axios.delete(`https://adminlm.onrender.com/api/invman/${id}`)
      .then((response) => {
        console.log(response);
        console.log('\ndeleted');
        setdeletehook(!deletehook);
      })
      .catch((error) => console.log(error))
  }



  useEffect(() => {
    getInventoryManagers();
  }, []);

  useEffect(() => {
    getInventoryManagers();
  }, [deletehook]);
  

  return (
    <div className={AllInventoryManagers.length<10?"queue-page h-screen border-2 rounded-md bg-tailtertiary m-0":"queue-page border-2 rounded-md bg-tailtertiary m-0"}>

      <div className="orders-container">
        <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>MANAGER ID</h2>
          <h2>INVENTORY MANAGER NAME</h2>
          <h2>OPTIONS</h2>
        </div>
        {AllInventoryManagers.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>InvManager #{e.id}</h2>
            <p>{e.firstname + " " + e.lastname}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<ViewSingleRole obj={e} role="Inventory Manager" />} />
              <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-tailtertiary3 text-black" onClick={() => navigate("/dashboard/editinventorymanager", { state: { obj: { e } } })}>EDIT</button>
              <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-red-500 text-black" onClick={(event) => onDelete(e.id, event)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryDetails;
