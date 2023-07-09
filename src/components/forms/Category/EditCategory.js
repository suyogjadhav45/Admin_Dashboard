import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import '../../../App.css';
import Navbar from '../../Navbar';
import Switch from '../../Switch';
import Alert from '../../Alert';



export default function EditCategory() {

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

    const [image, setimage] = useState(null);

    const onImageChange = (e) => {
        console.log(e.target.files);
        setimage(e.target.files[0]);
    }

    const [onsubchange, setonsubchange] = useState(false)
    const [catobj, setcatobj] = useState({ category: '', newcategory: '', color: '' });
    const [isToggled, setisToggled] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (catobj.category === 'select' || catobj.newcategory === '') {
            alert('Please fill all the fields');
        }
        else {
            catobj.color === "" ? catobj.color = "#000000" : catobj.color = catobj.color;
            const formData = new FormData();
            formData.append('image', image);
            formData.append('category', catobj.newcategory);
            formData.append('color', catobj.color);
            formData.append('allowed', isToggled);
            console.log(formData);
            axios.put(`https://adminlm.onrender.com/api/category/${catobj.category}`,formData )
                .then((response) => {
                    console.log(response);
                    showAlert("Category Updated Successfully", "success")
                    setcatobj({ category: '', newcategory: '', color: '' });
                    setonsubchange(!onsubchange);
                })
                .catch((error) => console.log(error))
        }
        console.log(catobj);
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setcatobj({ category: '', newcategory: '', color: '' });
    }

    const onChange = (e) => {
        setcatobj({ ...catobj, [e.target.name]: e.target.value });
    }


    useEffect(() => {
        getCatArray();           
    }, [onsubchange])

    useEffect(() => {
        getCatArray();
        //   console.log(catarray)
    }, [])



    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Edit Category Page" pagenumber="102" />
                    <Alert alert={alertval} />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>

                            <form className='w-full mx-auto p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>CATEGORY</h2>
                                <hr className='mt-2 w-48 border-2 mx-auto' />
                                <div className='flex flex-col py-2'>
                                    <label>Choose a Category</label>
                                    <select required name="category" value={catobj.category} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        <option value="select">Select</option>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.category}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Enter Updated Category : </label>
                                    <input required value={catobj.newcategory} className='p-2 resize-x border mt-2 rounded-md' type="text" name='newcategory' onChange={onChange} placeholder='Enter Category' />
                                </div>
                                <div className='flex flex-col py-2'>

                                    <label>Select Header Color : </label>

                                    <input required value={catobj.color} className='w-full h-8 p-2 resize-x border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />
                                </div>
                                <div className='flex py-2'>
                                    <div className='flex-col justify-center'>

                                        <label className='py-3 mr-4 font-bold'>Subcategory Allowed : </label>
                                    </div>
                                    <div className='flex-col py-2 justify-center'>
                                        <Switch isToggled={isToggled} onToggle={() => setisToggled(!isToggled)} />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Upload Category Image</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="file" name="image" onChange={onImageChange} />
                                </div>

                                <div className='flex mx-auto'>

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


