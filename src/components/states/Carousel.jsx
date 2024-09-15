import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export default function Carousel({slides}) {

    const [curr,setCurr] = useState(0);

    const handlePrev = () => {
        setCurr((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      };

      const handleNext = () => {
        setCurr((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      };

      useEffect(()=>{
        const interval = setInterval(()=>{
            setCurr((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        },2000);

        return ()=>clearInterval(interval);
      },[slides.length])


  return (
    <div className='overflow-hidden relative'>
    <div className={"flex transition ease-out duration-700"}
    style={{
        transform: `translateX(-${curr * 100}%)`,
    }}>
        {slides.map((s , index)=>(
            <img src={s} key={index}  />
        ))}
    </div>

    <div className='absolute top-0 h-full w-full justify-between items-center flex text-ellipsis p-3 text-white size-6'>
    <button onClick={handlePrev}>
        <BsArrowLeftShort></BsArrowLeftShort>
    </button>
    <button onClick={handleNext}>
        <BsArrowRightShort></BsArrowRightShort>
    </button>
    </div>
    </div>
  )
}
