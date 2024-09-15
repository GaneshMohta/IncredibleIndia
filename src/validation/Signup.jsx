import React, { useState } from 'react'
import './sign.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleChangeEmail=(e)=>{
    setEmail(e.target.value);
  }

  const handleChangePassword=(e)=>{
    setPassword(e.target.value);
  }

  const handleLogin = async(e)=>{
    e.preventDefault();
    const payload={
      email:email,
      password:password
    }
    console.log(payload);

    try{
      const res= await axios.post("http://localhost:3000/user/login",payload);
      localStorage.setItem("token",res.data);
      navigate('/');
    }
    catch(e){

    }
  }
  return (
    <div>

        <div className='signin-main'>
            <div className='sign-f1'>
             <div><h1>Bharat</h1></div>
             <p>Sign up for Best Experience</p>
             <button className='sgn_btn bg-slate-300 rounded-xl w-[70%] translate-x-12 text-base p-2' >Continue with Google</button>
             <p><span className='or'>________</span > or <span className='or'>________</span></p>
             <button className='text-xs'>Continue with mail</button>
             <hr className='w-11/12 text-center relative translate-x-2 text-stone-900 bg-slate-950'/>
             <div className='flex justify-center'>
             <form className='flex flex-col gap-3 w-80 rounded-md items-center'>
              <input className='w-[30vh] p-1 ms-2 rounded-md text-sm' type='mail'
               name='email' id='email' placeholder='Ganesh@gmail.com' onChange={handleChangeEmail}/>
              <input className='w-[30vh] p-1 ms-2 rounded-md' placeholder='....' type='password' name='password' id='password' onChange={handleChangePassword}/>
              <button type='submit' onClick={handleLogin} className='bg-blue-500 w-[15vh] ms-5 text-xs rounded-lg p-1'>SignUp</button>
             </form>
            </div>
            </div>
            <div className='sign-f2'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-9llGNNZGv9wB4UKWCcdiXxxroFI48Le0g&s' width={'100%'}/>
            </div>

        </div>

    </div>
  )
}
