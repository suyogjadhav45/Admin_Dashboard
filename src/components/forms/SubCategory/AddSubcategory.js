import React from 'react'
import { useState, useEffect } from "react";
import '../../../App.css';
import Navbar from '../../Navbar';
import axios from 'axios';
import Switch from '../../Switch';
import Alert from '../../Alert';


export default function AddSubcategory() {


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


    const [catarray, setcatarray] = useState([
        { id: 1, category: 'fruits' },
        { id: 2, category: 'vegetables' },
        { id: 3, category: 'dairy' },
        { id: 4, category: 'meat' },
    ])

    const getCatArray = async () => {
        const response = await fetch(`https://adminlm.onrender.com/api/category/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setcatarray(json);
    }


    const [obj, setobj] = useState({
        category: '',
        subcategory: '',
        color: '',
    })

    const [isToggled, setisToggled] = useState(false)

    const [image, setimage] = useState(null);

    const onImageChange = (e) => {
        console.log(e.target.files);
        setimage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(obj + " " + isToggled)
        if (obj.category === '' || obj.subcategory === '' || obj.subcategory === 'select') {
            alert("Please fill all the fields");
            return;
        }
        else {

            obj.color === "" ? obj.color = "#000000" : obj.color = obj.color;
            const formData = new FormData();
            formData.append('image', image);
            formData.append('category', obj.category);
            formData.append('subcategory', obj.subcategory);
            formData.append('color', obj.color);
            formData.append('allowed', isToggled);
            console.log(formData);
            axios.post("https://adminlm.onrender.com/api/subcategory/",formData)
                .then((response) => {
                    console.log(response);
                    showAlert("Subcategroy Added Successfully", "success")
                    setobj({ category: '', subcategory: '', color: '' });
                })
                .catch((error) => console.log(error))
        }
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({ category: '', subcategory: '', color: '' });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        getCatArray();
    }, [])


    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Sub-Category Page" pagenumber="103" />
                    <Alert alert={alertval} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>SUB-CATEGORY</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Choose a Category</label>
                                    <select required name="category" value={obj.category} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        <option value="select">Select</option>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.category}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Sub Category</label>
                                    <input required className='border p-2 mt-1 rounded-md' type="text" name='subcategory' value={obj.subcategory} placeholder='Enter Sub Category' onChange={onChange} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Select Header Color</label>
                                    <input value={obj.color} required className='w-full py-1 border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />

                                </div>
                                <div className='flex py-2'>
                                    <div className='flex-col justify-center'>

                                        <label className='py-1 mr-2 font-bold'>Product Allowed : </label>
                                    </div>
                                    <div className='flex-col justify-center'>
                                        <Switch isToggled={isToggled} onToggle={() => setisToggled(!isToggled)} />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Upload Sub-Category Image</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="file" name="image" onChange={onImageChange} />
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


