import React from 'react'


export default function Bestofindia() {
  return (
    <div className='bg-slate-50'>
        <div>
        <h1 className='text-center text-3xl font-serif font-black mt-0 pt-0'>DESTINATION</h1>
        <p  className='text-center font-mono text-xs'>From historical cities to natural splendours, come see the best of India</p>
        <br />
        <div className='flex justify-around'>
          <div className='w-[25vw] h-[50vh] bg-stone-400 relative  dest-hov'>
            <img src='https://i.pinimg.com/564x/79/22/a1/7922a18e522ede086755da933a15b50e.jpg'  className='h-[100%] w-[100%]'/>
            <div className='w-[20vw] h-[20vh] absolute -bottom-12  bg-black/60 text-white p-2'>
              <p>Make your wedding More Romantic</p>
              <span className='dest-hidden'>Read More..</span>
            </div>
          </div>
          <div className='w-[25vw] h-[50vh] bg-stone-400 relative  dest-hov'>
            <img src='https://i.pinimg.com/474x/a2/6a/f8/a26af82d2c28202d58a4497356b639b2.jpg' className='h-[100%] w-[100%]'/>
            <div className='w-[20vw] h-[20vh] absolute -bottom-12 bg-black/60 text-white p-2'>
            <p>Makes your Soul connect to Heaven </p>
            <span className='dest-hidden'>Read More..</span>
            </div>
          </div>
          <div className='w-[25vw] h-[50vh] bg-stone-400 relative dest-hov'>
            <img src='https://i.pinimg.com/474x/7c/e3/81/7ce381d4f2a3f8b7d6bdfaa710f6e76b.jpg' className='h-[100%] w-[100%]'/>
            <div className='w-[20vw] h-[20vh] absolute -bottom-12 bg-black/60 text-white p-2'>
            <p>Adventure thats feel unbelievable</p>
            <span className='dest-hidden'>Read More..</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
