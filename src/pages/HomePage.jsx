import React from 'react'
import MB1 from '../components/states/image/mb3.jpg'
import NE from '../components/states/image/National-Emblem.jpg'
import { Link } from 'react-router-dom'
import './front.css'
import Bestofindia from './Bestofindia'
import BlogofIndia from '../compounds/BlogofIndia'
import './responsive.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomePage() {
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
    <div className='bg-slate-50'>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4000}  // 5 seconds
        infinite={true}        // Loop through items infinitely
        arrows={false}         // Hide left and right arrows
        showDots={false}       // Hide navigation dots
      >
        <div className='relative h-auto bg-white hm-m1'>
          <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/SOU_new.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg" alt='hm-img' className='w-full'/>
          <div className="absolute top-1 flex justify-between w-full hm-h1">
            <div className='ms-2'>a</div>
            <div><h1>ATALTUYA BHARAT</h1></div>
            <div className='me-2'></div>
          </div>
          <div className='absolute top-[30vh] left-[0vh]'>
            <div className='w-[100vw] h-[30vh] flex   items-center'>
              <h1 className='matemasie-regular typewriter '>INCREDIBLE INDIA</h1>
            </div>
          </div>
        </div>

        <div className='relative h-auto bg-white hm-m1'>
          <img src="https://static-blog.treebo.com/wp-content/uploads/2018/06/Uttar-Pradesh.jpg" alt='hm-img' className='w-full'/>
          <div className="absolute top-1 flex justify-between w-full hm-h1">
            <div className='ms-2'>a</div>
            <div><h1>ATALTUYA BHARAT</h1></div>
            <div className='me-2'></div>
          </div>
          <div className='absolute top-[30vh] left-[10vh] backdrop-card'>
            <div className='w-[40vw] h-[30vh] backdrop-blur-1 bg-white/20 p-3 flex'>
              <div className='w-[60%]'>
                <h1 className='text-orange-600'>The Incredible states of India</h1>
                <p className='text-white'>8 Beauties and 28 Wonders of India</p>
                <br />
                <Link to='Map'>
                <button className='bg-yellow-400 p-1 rounded-md'>Explore</button>
                </Link>
              </div>
              <div className='bg-red-700 rounded-3xl h-32 w-36'>
                <img src='https://fairgaze.com/images/UploadedImages/thumbs/0309134_0309134_xasdiihbb.jpg' className='h-full rounded-3xl'/>
              </div>
            </div>
          </div>
        </div>

        <div className='relative h-auto bg-white hm-m1'>
          <img src="https://i.pinimg.com/736x/f4/c4/3c/f4c43cd02794709f565d65d40a83d66b.jpg" alt='hm-img' className='w-full'/>
          <div className="absolute top-1 flex justify-between w-full hm-h1">
            <div className='ms-2'>a</div>
            <div><h1>ATALTUYA BHARAT</h1></div>
            <div className='me-2'></div>
          </div>
          <div className='absolute top-[30vh] left-[10vh] backdrop-card'>
            <div className='w-[40vw] h-[30vh] backdrop-blur-1 bg-white/20 p-3 flex'>
              <div className='w-[60%]'>

                <h1 className='text-orange-700'>Make in India</h1>
                <p className='text-white'>It is an India Product Zero Defect and Zero Effect</p>
                <br />
                <Link to='Make-in-India'>
                <button className='bg-yellow-400 p-1 rounded-md'>Explore</button>
                </Link>
              </div>
              <div className='bg-red-700 rounded-3xl h-32 w-36'>
                <img src='https://b1088462.smushcdn.com/1088462/wp-content/uploads/2021/02/made_in_india_cctv.webp?lossy=2&strip=1&webp=1' className='h-full rounded-3xl'/>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <br />

      <div className='mb-12'>
        <Bestofindia />
      </div>
      <div>
      <div>
        <h1 className='text-center text-3xl font-serif font-black'>Blog</h1>
        <h2 className='text-center  text-pretty font-mono text-xs'>An insight to the incredible experience in India </h2>
        <div>
          <BlogofIndia />
        </div>
      </div>
      </div>
    </div>
  )
}









// import React from 'react'
// import img from '../components/states/image/incredible.png'
// import NE from '../components/states/image/National-Emblem.jpg'
// import { Link } from 'react-router-dom'
// import './front.css'
// import BlogofIndia from '../compounds/BlogofIndia'
// import Bestofindia from './Bestofindia'
// import MB1 from '../components/states/image/mb3.jpg'
// import { VscSignIn } from "react-icons/vsc"





// function HomePage() {
//   return (
//    <>
//     <div className='pb-0'>
//     <img src={MB1} height={'100%'} />
//     </div>
//     <div className='absolute flex flex-row justify-between bottom-80 w-[98vw] ps-2 pe-6'>
//       <div></div>
//       <div className='h-con'>Aatulya Bharat</div>
//       <div className='h-36 text-black'><VscSignIn /></div>
//     </div>

    //  <div className='bg-slate-50 '>
    //  <div className='flex justify-around relative bottom-72'>
    //  <Link to='/map' key="map-link">
    //  <div className='bg-red-700 rounded-3xl h-32 w-36'>
    //   <img src='https://fairgaze.com/images/UploadedImages/thumbs/0309134_0309134_xasdiihbb.jpg' className='h-full rounded-3xl '/>
    //   <p className='text-red-200 text-center'>States of India</p>
    //  </div >
    //  </Link>
    //  <Link to='/KnowIndia' key="know-India">
    //  <div className='bg-white rounded-3xl h-32 w-36'>
    //   <img src={NE} className=' rounded-3xl h-full w-32 items-center ps-4'/>
    //   <p className='text-red-200 text-center'>Know India</p>
    //  </div>
    //  </Link>
    //  <Link to='/Make-in-India' key="unKnown">
    //  <div className='rounded-3xl h-32 w-36'>
    //   <img src='https://b1088462.smushcdn.com/1088462/wp-content/uploads/2021/02/made_in_india_cctv.webp?lossy=2&strip=1&webp=1' className='rounded-3xl h-full'/>
    //   <p className='text-red-200 text-center'>Make In India</p>
    //  </div>
    //  </Link>
    // </div>
//     <div className='relative bottom-16'>
//       <Bestofindia />
//       <br />
//       <br />
//       <br />
      // <div>
      //   <h1 className='text-center text-3xl font-serif font-black'>Blog</h1>
      //   <h2 className='text-center  text-pretty font-mono text-xs'>An insight to the incredible experience in India </h2>
      //   <div>
      //     <BlogofIndia />
      //   </div>
      // </div>
//       <br />
//       <br />
//       </div>
//       </div>
//    </>
//   )
// }

// export default HomePage
