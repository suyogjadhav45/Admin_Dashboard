import React, { useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import '../../../App.css';
import Navbar from '../../Navbar';
import Alert from '../../Alert';
import { useFormik } from "formik";
import { ProductSchema } from '../Schemas.js';



export default function AddProducts() {


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

    const [brandarray, setbrandarray] = useState([])

    const getBrandArray = async () => {
        const response = await fetch(`https://adminlm.onrender.com/api/brand/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setbrandarray(json);
    }

    const [uomarray, setuomarray] = useState([])

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


    const [offerarray, setofferarray] = useState([
        { id: 1, offer: "10 % off" },
        { id: 2, offer: "20 % off" },
        { id: 3, offer: "30 % off" },
        { id: 4, offer: "Buy 1 Get 1" },
    ])

    const getOfferArray = async () => {
        const response = await fetch(`https://adminlm.onrender.com/api/offer/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        setofferarray(json);
    }

    const [image, setimage] = useState(null);

    const onImageChange = (e) => {
        console.log(e.target.files);
        setimage(e.target.files[0]);
    }
    const initialValues = {
        productname: '',
        productprice: 0,
        category: '',
        subcategory: '',
        brand: '',
        uom: '',
        offer: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ProductSchema,
            onSubmit: (values, action) => {
                console.log(
                    "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
                    values
                );
                if(image!=null){
                    action.resetForm();
                    handlereq();
                }
                else{
                    alert("Please Upload an Image")
                }
            },
        });

    const handlereq = (e) => {

        const formData = new FormData();
        formData.append('productname', values.productname);
        formData.append('productprice', values.productprice);
        formData.append('category', values.category);
        formData.append('subcategory', values.subcategory);
        formData.append('brand', values.brand);
        formData.append('uom', values.uom);
        formData.append('offer', values.offer);
        formData.append('image', image);
        formData.append('quantity', 0);

        axios.post(`https://adminlm.onrender.com/api/product/`, formData)
            .then((response) => {
                console.log(response);
                showAlert("Product Added Successfully", "success")
            })
            .catch((error) => console.log("Error : \n" + error))

    }

    const onDiscard = (e) => {
        e.preventDefault();
        values.productname = '';
        values.productprice = 0;
        values.category = '';
        values.subcategory = '';
        values.brand = '';
        values.uom = '';
        values.offer = '';
        setimage(null);
    }

    useEffect(() => {
        getCatArray();
        getSubcatArray();
        getBrandArray();
        getUomArray();
        // getOfferArray();

    }, [])

    
    const [subcat, setsubcat] = useState([]);

    const nestedChange = (e) => {
        handleChange(e);
        const m2 = subcatarray.filter(item => item.category == e.target.value);
        setsubcat(m2);
    }



    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Product Page" pagenumber="109" />
                    <Alert alert={alertval} />
                    <div className='items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>PRODUCTS</h2>
                                <hr className='w-36 mt-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Product Name</label>
                                    <input required value={values.productname} className='mt-1 border p-2 rounded-md' type="text" name='productname' placeholder='Enter Product Name' onBlur={handleBlur} onChange={handleChange} />
                                    {errors.productname && touched.productname ? (
                                        <p className="form-error">{errors.productname}</p>
                                    ) : null}
                                </div>



                                <div className='flex flex-col py-2'>
                                    <label>Product Price</label>
                                    <input required value={values.productprice} className='mt-1 border p-2 rounded-md' type="number" name='productprice' placeholder='Enter Product Price' onBlur={handleBlur} onChange={nestedChange} />
                                    {errors.productprice && touched.productprice ? (
                                        <p className="form-error">{errors.productprice}</p>
                                    ) : null}
                                </div>


                                <div>
                                    <label>Category</label><br />
                                    <select required value={values.category} className='mt-1 border px-2 py-2 w-full rounded-md' name="category" onBlur={handleBlur} onChange={nestedChange} >
                                        <option value='select'>select</option>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.category}</option>
                                        ))}
                                    </select>
                                    {errors.category && touched.category ? (
                                        <p className="form-error">{errors.category}</p>
                                    ) : null}
                                </div>
                                <div className='my-2'>
                                    <label>Subcategory</label><br />
                                    <select required value={values.subcategory} className='mt-1 border px-2 py-2 w-full rounded-md' name="subcategory" onBlur={handleBlur} onChange={handleChange} >
                                        <option value='select'>select</option>
                                        {subcat.map((s) => (
                                            <option key={s.id} value={s.subcategory}>{s.subcategory}</option>
                                        ))}
                                    </select>
                                    {errors.subcategory && touched.subcategory ? (
                                        <p className="form-error">{errors.subcategory}</p>
                                    ) : null}
                                </div>
                                <div className='my-2'>
                                    <label>Brand</label><br />
                                    <select value={values.brand} className='mt-1 border px-2 py-2 w-full rounded-md' name="brand" onBlur={handleBlur} onChange={handleChange} >
                                        <option value='select'>select</option>
                                        {brandarray.map((b) => (
                                            <option key={b.id} value={b.bname}>{b.bname}</option>
                                        ))}
                                    </select>
                                    {errors.brand && touched.brand ? (
                                        <p className="form-error">{errors.brand}</p>
                                    ) : null}
                                </div>
                                <div className='my-2'>
                                    <label>UMO(Kg's)</label><br />
                                    <select required value={values.uom} className='mt-1 border px-2 py-2 w-full rounded-md' name="uom" onBlur={handleBlur} onChange={handleChange} >
                                        <option value='select'>select</option>
                                        {uomarray.map((b) => (
                                            <option key={b.id} value={b.name}>{b.name}</option>
                                        ))}
                                    </select>
                                    {errors.uom && touched.uom ? (
                                        <p className="form-error">{errors.uom}</p>
                                    ) : null}
                                </div>
                                <div className='my-2'>
                                    <label>Offer</label><br />
                                    <select required value={values.offer} className='mt-1 border px-2 py-2 w-full rounded-md' name="offer" onBlur={handleBlur} onChange={handleChange} >
                                        <option value='select'>select</option>
                                        {offerarray.map((b) => (
                                            <option key={b.id} value={b.offer}>{b.offer}</option>
                                        ))}
                                    </select>
                                </div>
                                {errors.offer && touched.offer ? (
                                    <p className="form-error">{errors.offer}</p>
                                ) : null}


                                <div className='flex flex-col py-2'>
                                    <label>Upload Product Image</label>
                                    <input required className='mt-1 border p-2 rounded-md' type="file" name="image" onChange={onImageChange} />
                                </div>

                                <div className='flex mx-auto mt-2'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
                                    <button className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


