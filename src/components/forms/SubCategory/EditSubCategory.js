import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import '../../../App.css';
import Navbar from '../../Navbar';
import Alert from '../../Alert';
import Switch from '../../Switch';


export default function EditSubCategory() {


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

    const [image, setimage] = useState(null);

    const onImageChange = (e) => {
        console.log(e.target.files);
        setimage(e.target.files[0]);
    }


    const [catarray, setcatarray] = useState([])

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

    const [subcatarray, setsubcatarray] = useState([])

    const getSubcatArray = async () => {
        const response = await fetch(`https://adminlm.onrender.com/api/subcategory/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setsubcatarray(json);
    }

    const [obj, setobj] = useState({
        category: '',
        subcategory: '',
        updatedsubcategory: '',
        color: '',
    })
    const [isToggled, setisToggled] = useState(false)

    const [onsub, setonsub] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const m = subcatarray.find(item => item.subcategory == obj.subcategory);
        console.log(m)
        if (obj.category === '' || obj.subcategory === '' || obj.subcategory === 'select') {
            alert("Please fill all the fields");
            return;
        }
        else {
            obj.color === "" ? obj.color = "#000000" : obj.color = obj.color;
            // put req
            console.log(obj)
            const formData = new FormData();
            formData.append('image', image);
            formData.append('category', obj.category);
            formData.append('subcategory', obj.updatedsubcategory);
            formData.append('color', obj.color);
            formData.append('allowed', isToggled);

            axios.put(`https://adminlm.onrender.com/api/subcategory/${m.id}`, formData)
                .then(res => {
                    console.log(res);
                    setobj({ category: '', updatedsubcategory: '', subcategory: '', color: '' });
                    showAlert('Sub-Category Updated Successfully', 'success');
                    setonsub(!onsub);
                }
                )
                .catch(err => {
                    console.log(err);
                }
                )

        }
        console.log(obj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({ category: '', updatedsubcategory: '', subcategory: '', color: '' });
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    const [subcat, setsubcat] = useState([]);

    const nestedChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
        const m2 = subcatarray.filter(item => item.category == e.target.value);
        setsubcat(m2);
    }


    useEffect(() => {
        getCatArray();
        getSubcatArray();
    }, [])

    useEffect(() => {
        getCatArray();
        getSubcatArray();
    }, [onsub])

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Sub-Category Page" pagenumber="104" />
                    <Alert alert={alertval} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='mx-auto w-full bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>SUB-CATEGORY</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Choose a Category</label>
                                    <select required name="category" value={obj.category} onChange={nestedChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        <option value='select'>Select Category</option>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='my-2'>
                                    <label>Subcategory</label><br />
                                    <select required value={obj.subcategory} className='mt-1 border px-2 py-2 w-full rounded-md' name="subcategory" onChange={onChange}>
                                        <option value='select'>Select Subcategory</option>
                                        {subcat.map((s) => (
                                            <option key={s.id} value={s.subcategory}>{s.subcategory}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Enter Updated Sub Category</label>
                                    <input required className='border p-2 mt-1 rounded-md' value={obj.updatedsubcategory} type="text" name='updatedsubcategory' placeholder='Enter Sub Category' onChange={onChange} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Select Header Color</label>
                                    <input required className='w-full border p-2 mt-1 rounded-md' value={obj.color} type="color" name='color' placeholder='Enter Sub Category' onChange={onChange} />
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


