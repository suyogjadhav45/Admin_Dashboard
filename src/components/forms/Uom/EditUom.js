import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import '../../../App.css';
import Navbar from '../../Navbar';
import Alert from '../../Alert';


export default function EditUom() {

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

    const [uomarray, setuomarray] = useState([
        { id: 1, uom: 'kg' },
        { id: 2, uom: 'g' },
        { id: 3, uom: 'l' },
        { id: 4, uom: 'ml' },
    ])

    const [obj, setobj] = useState({
        updateduom: '',
        uom: ''
    })

    const getUomArray = async () => {
        const response = await fetch(`https://adminlm.onrender.com/api/uom/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setuomarray(json);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (obj.updateduom === '' || obj.uom === '' || obj.uom === 'select') {
            alert('Please fill all the fields');
        }
        else {
            axios.put(`https://adminlm.onrender.com/api/uom/${obj.uom}`, {
                name: obj.updateduom,
            })
                .then((response) => {
                    console.log(response);
                    showAlert("Unit of Measurement Updated Successfully", "success")
                    getUomArray();
                    setobj({
                        updateduom: '',
                        uom: ''
                    });
                })
                .catch((error) => console.log(error))
        }
        console.log(obj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({
            updateduom: '',
            uom: ''
        });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        getUomArray();
    }, [])

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Unit Of Measurement Page" pagenumber="108" />
                    <Alert alert={alertval} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>Unit Of Measurement</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />


                                <div className='flex flex-col py-2'>
                                    <label>Select a UOM</label>
                                    <select required name="uom" value={obj.uom} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        <option value="select">Select</option>
                                        {uomarray.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Enter Updated Unit Of Measurement</label>
                                    <input value={obj.updateduom} required className='w-full py-1 border mt-2 rounded-md' type="text" name='updateduom' onChange={onChange} placeholder='Enter Unit Of Measurement' />

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


