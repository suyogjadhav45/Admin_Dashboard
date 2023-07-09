import React, { useState } from 'react'
import '../App.css';
import Navbar from '../components/Navbar';


export default function Home() {

    return (
        <div className="container">
            <div className="main bg-tailtertiary h-screen m-0 p-0">
                <Navbar pagename="Dashboard Home Page" />
                <h2 className='font-poppins font-bold text-5xl text-center mt-48'>Welcome to Admin Dashboard</h2>
            </div>
        </div>
    )
}

