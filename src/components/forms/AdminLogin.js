import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../App.css';
import axios from "axios";
import Modal from "../Modal";

export default function AdminLogin({ update, login }) {
    const navigate = useNavigate();

    const [userinfo, setuserinfo] = useState({ username: "", password: "" })

    const [cred, setcred] = useState(null)

    const getCred=async()=>{
        const response = await fetch(`https://adminlm.onrender.com/api/adminlog/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        console.log(json)
        setcred(json);
        console.log(cred)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userinfo.username === '' || userinfo.password === '') {
            alert('Please fill all the fields');
        }
        else {
            console.log(userinfo);
            // cred.map((item) => {
                // if (item.username === userinfo.username && item.password === userinfo.password) {
                //     console.log('login successfull');
                //     navigate('/dashboard/home');
                // }
                if(userinfo.username==="admin07" && userinfo.password==="test1234"){
                    console.log('login successfull');
                    navigate('/dashboard/home');
                }
                else{
                    console.log("invalid cred");
                    alert('Invalid Cred or Password!!');
                }
            // });
        }

    }


    useEffect(() => {
      getCred();
    }, [])
    

    const onChange = (e) => {
        setuserinfo({ ...userinfo, [e.target.name]: e.target.value });
    }

    return (
        <div className='w-full'>
            <div className='mt-8 p-8 h-screen mx-auto rounded-lg overflow-hidden'>
                <div className=' border-2 rounded-md max-w-lg mx-auto justify-center shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                    <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>

                        <h2 className='text-center font-bold font-mono text-2xl'>ADMIN LOGIN</h2>
                        <hr className='w-36 mt-2 border-2 mx-auto' />


                        <div className='flex flex-col py-2'>
                            <label>Username</label>
                            <input required value={userinfo.username} className='mt-1 border p-2 rounded-md' type="username" name='username' placeholder='Enter Username/Email' onChange={onChange} />
                        </div>


                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input required value={userinfo.password} className='mt-1 border p-2 rounded-md' type="password" name='password' placeholder='Enter Password' onChange={onChange} />
                        </div>

                        <button type="submit" className='font-poppins font-bold border w-full mt-3 mb-2 rounded-md py-2 bg-tailprimary hover:bg-tailtertiary text-black' >LOGIN</button>
                    </form>
                </div>
            </div>
        </div>

    )
}



