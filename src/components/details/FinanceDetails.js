import React,{useEffect,useState} from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";
import ViewSingleRole from "../viewsingle/ViewSingleRole";
import axios from "axios";



const FinanceDetails = () => {

  const navigate = useNavigate();

  // AllFinanceManagers Array
  const [AllFinanceManagers, setAllFinanceManagers] = useState([]);


  // getFinanceManager api
  const getFinanceManager = async () => {
    const response = await fetch(`https://adminlm.onrender.com/api/finman/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    setAllFinanceManagers(json);
  }

  const [deletehook, setdeletehook] = useState(false)

  const onDelete = (id, event) => {
    event.preventDefault();
    axios.delete(`https://adminlm.onrender.com/api/finman/${id}`)
      .then((response) => {
        console.log(response);
        console.log('\ndeleted');
        setdeletehook(!deletehook);
      })
      .catch((error) => console.log(error))
  }



  useEffect(() => {
    getFinanceManager();
  }, []);

  useEffect(() => {
    getFinanceManager();
  }, [deletehook]);
  


  return (
    <div className={AllFinanceManagers.length<10?"queue-page h-screen border-2 rounded-md bg-tailtertiary m-0":"queue-page border-2 rounded-md bg-tailtertiary m-0"}>

      <div className="orders-container">
        <div className="flex pl-3 py-3 justify-between pr-20 font-poppins font-bold text-teal-200 bg-black ">
          <h2>MANAGER ID</h2>
          <h2>FINANCE MANAGER NAME</h2>
          <h2>OPTIONS</h2>
        </div>
        {AllFinanceManagers.map((e) => (
          <div key={e.id} className="order-card link hover:transition-all bg-white duration-300 ease-in-out font-poppins font-bold m-0 px-2 py-0">
            <h2>FinManager #{e.id}</h2>
            <p>{e.firstname+" "+e.lastname}</p>
            <div className="btn flex m-0 p-0">
              <Modal btnname="DETAILS" compinfo={<ViewSingleRole obj={e} role="Finance Manager"/>}/>
              <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-tailtertiary3 text-black" onClick={()=> navigate("/dashboard/editfinancemanager",{state:{obj:{e}}}) }>EDIT</button>
              <button className="font-poppins font-bold border-2 w-full mr-2 mt-2 mb-2 px-3 rounded-md py-2 bg-tailtertiary hover:bg-red-500 text-black" onClick={(event) => onDelete(e.id, event)}>DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceDetails;
