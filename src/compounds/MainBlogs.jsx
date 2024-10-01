import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ne from '../components/states/image/image.png'
import { useDispatch, useSelector } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import { searchBlogs, setBlogs } from '../Redux/blogslice';
import { IoIosCreate } from "react-icons/io";
import axios from 'axios';


export default function MainBlogs() {
    const [searchtext , setSearchText] = useState("");
    useEffect(()=>{
        setourBlogs();
    },[]);
    const dispatch =  useDispatch();

    const setourBlogs=async()=>{
        const res= await axios.get('http://localhost:3000/blog/get',{
            headers: {
                "Content-Type": "application/json"
            }
        });
        dispatch(setBlogs(res.data));

    }
    const blogs= useSelector((state)=>state.blog.blogs);
    const filterblogs = useSelector((state)=>state.blog.filterblog)

    console.log(filterblogs);
    const handleSearch=(e)=>{
        setSearchText(e)
        console.log(searchtext);
        dispatch(searchBlogs(searchtext));
    }

    const handleTitle=(e)=>{
        setSearchText(e.target.value)

    }

  return (
    <div className='flex flex-col  aatulya-responsive'>
        <div className='flex justify-around h-[10vh] aatulya-header sticky top-0 z-20'>
        <Link to='/'><span className='la z-10 '><BsArrowLeftShort/></span></Link>
        <span className='absolute left-[40vw] top-3 text-3xl  font-bold'>Aatulya Bharat</span>
        <Link to='/post' className='text-xl relative left-28 top-5 flex'><IoIosCreate /><span className='text-base'>Write</span></Link>
        </div>

        <div className='flex aatulya-body border-2'>
            <div className='w-[70vw] h-auto p-4  border-e-2 ' style={{height:'auto'}}>
            {filterblogs.map((ourblog)=>(
                <Link to={`/blog/${ourblog.Titleid}`}>
               <div className='h-[30vh] gap-1 bg-zinc-400 flex m-2' key={ourblog.id}>

               <div className='w-[70%] p-2'>
                   <h1 className='text-xl font-semibold' key={ourblog.id}>{ourblog.Title}</h1>
                   <p className='text-sm'>{ourblog.author}</p>
               </div>
               <div className='w-[30%]'>
                   <img src={`http://localhost:3000/uploads/${ourblog.image}`} className='h-[80%]' alt='img'/>
               </div>
              </div>
              </Link>
              ))}
            </div>

            <div className='w-[30vw] sticky top-16 left-0 h-[90vh]'>
            <h1 className='p-2 text-xl ps-4'>Recommended Topics</h1>
            <div className='flex justify-between py-3 flex-wrap gap-5 ps-4 pe-3 '>
            <button className="w-24 rounded-md text-slate-100 text-center h-8 bg-slate-950 hover:bg-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
             onClick={()=>handleSearch("States")}>
            States
            </button>
            <button className="w-24 rounded-md text-slate-100 text-center h-8 bg-slate-950 hover:bg-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={()=>handleSearch("Cultures")}>
            Cultures
            </button>
            <button className="w-24 rounded-md text-slate-100 text-center h-8 bg-slate-950 hover:bg-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={()=>handleSearch("Heritage")}>
            Heritage
            </button>
            <button className="w-24 rounded-md text-slate-100 text-center h-8 bg-slate-950  hover:bg-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={()=>handleSearch("Innovation")}>
            Innovation
            </button>
            <input type='text' className='bg-slate-950 text-slate-50 rounded-md w-32' onChange={handleTitle}/>
            <p className='bg-slate-950 relative right-32 rounded-md text-slate-100'><CiSearch/></p>
            </div>
            </div>
        </div>

    </div>
  )
}
