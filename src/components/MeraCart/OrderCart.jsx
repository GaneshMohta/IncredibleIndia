import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function OrderCart() {


  const Cart = useSelector((state)=>state.cart.data)


  if(Cart.length===0){
    return <h1 style={{textAlign:"center"}} className='bg-slate-100 h-[100vh] flex items-center justify-center font-bold text-3xl text-blue-700'>😑Cart is Empty😑</h1>
}
  return <div className='bg-slate-100 h-[100vh]'>
      <div className='flex justify-between p-2 bg-slate-300 sticky top-0 z-10'>
      <div className='flex gap-2'>
      <Link to='/Make-in-India'><span className='text-slate-950 relative top-1'><BsArrowLeftShort/></span></Link>
      <h3>Aatulya Bharat</h3>
      </div>
      </div>

      <div>
        {Cart.map((items)=>{
          <div className='bg-slate-950'>
          console.log("tems",items);
          <p className=''>{items}</p>
          </div>
        })}
      </div>
    </div>
}
