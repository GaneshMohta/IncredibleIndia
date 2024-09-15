import React from 'react'
import MB1 from '../components/states/image/mb3.jpg'
import NE from '../components/states/image/National-Emblem.jpg'
import { Link } from 'react-router-dom'
import './front.css'
import './responsive.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Ref() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={7000}  // 5 seconds
        infinite={true}        // Loop through items infinitely
        arrows={false}         // Hide left and right arrows
        showDots={true}       // Hide navigation dots
      >
        <div className='relative h-[90vh] bg-white hm-m1'>
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/SOU_new.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg" alt='hm-img' className='h-[90vh] w-full'/>
          <div className="absolute top-1 flex justify-between w-full hm-h1">
            <div className='ms-2'>a</div>
            <div><h1>ATALTUYA BHARAT</h1></div>
            <div className='me-2'></div>
          </div>
          <div className='absolute top-[30vh] left-[0vh]'>
            <div className='w-[100vw] h-[30vh] flex   items-center'>
              <h1 className='matemasie-regular typewriter '>INCREDIBLE INDIA</h1>
              {/* <div className='w-[60%]'>
                <h1 className='text-orange-600'>The Incredible states of India</h1>
                <p className='text-white'>8 Beauties and 28 Wonders of India</p>
                <br />
                <button className='bg-yellow-400 p-1 rounded-md'>Explore</button>
              </div>
              <div className='bg-red-700 rounded-3xl h-32 w-36'>
                <img src='https://fairgaze.com/images/UploadedImages/thumbs/0309134_0309134_xasdiihbb.jpg' className='h-full rounded-3xl'/>
              </div> */}
            </div>
          </div>
        </div>

        <div className='relative h-[90vh] bg-white hm-m1'>
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/SOU_new.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg" alt='hm-img' className='h-[90vh] w-full'/>
          <div className="absolute top-1 flex justify-between w-full hm-h1">
            <div className='ms-2'>a</div>
            <div><h1>ATALTUYA BHARAT</h1></div>
            <div className='me-2'></div>
          </div>
          <div className='absolute top-[30vh] left-[10vh]'>
            <div className='w-[40vw] h-[30vh] backdrop-blur-1 bg-white/20 p-3 flex'>
              <div className='w-[60%]'>
                <h1 className='text-orange-600'>The Incredible states of India</h1>
                <p className='text-white'>8 Beauties and 28 Wonders of India</p>
                <br />
                <button className='bg-yellow-400 p-1 rounded-md'>Explore</button>
              </div>
              <div className='bg-red-700 rounded-3xl h-32 w-36'>
                <img src='https://fairgaze.com/images/UploadedImages/thumbs/0309134_0309134_xasdiihbb.jpg' className='h-full rounded-3xl'/>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
