import React from 'react'
import { useState } from "react";
import '../../../App.css';
import Navbar from '../../Navbar';
import axios from 'axios';
import Alert from '../../Alert';


export default function AddUom() {

    const [alertval, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    const [obj, setobj] = useState({
        uom: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.uom === '') {
            alert("Please fill all the fields");
            return;
        }
        else {

            axios.post("https://adminlm.onrender.com/api/uom/", { name: obj.uom })
                .then((response) => {
                    console.log(response);
                    showAlert("Unit of Measurement Added Successfully", "success")
                    setobj({ uom: '' });
                })
                .catch((error) => console.log(error))
        }
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({ uom: '' });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Unit Of Measurement Page" pagenumber="107" />
                    <Alert alert={alertval} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>Unit Of Measurement</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />


                                <div className='flex flex-col py-2'>
                                    <label>Enter Unit Of Measurement</label>
                                    <input value={obj.uom} required className='w-full py-2 border mt-2 rounded-md' type="text" name='uom' onChange={onChange} placeholder='Enter Unit Of Measurement' />

                                </div>
                                <div className='flex mx-auto mt-2'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}