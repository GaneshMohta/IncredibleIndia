import React from 'react'
import Carousel from './Carousel';

export default function TamilNadu() {
    const images = [
        "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTb2K9VlHO5lWVzMnj6G6E9cmP01QQL45jt0oVW3zhF-MXTteJ4S_BXFBZ6WWcqcrcbRbT-L4Zm-jblfXf1gDMhwPJ6pl7AsF7ZVL0syw",
        "https://lh5.googleusercontent.com/p/AF1QipPqhp_nLJl4CaAt8S-T-vb0xfQZO9OIcRjVLSHS=w972-h562-n-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipOn9MjC_dOPx6yNArXy2OJiaNB-W0ER5QQ-eR6_=w972-h562-n-k-no",
        "https://lh5.googleusercontent.com/p/AF1QipOe0EVXkHRA-Kge8AgDBPH2p2t6KTNV86WVCOS7=w972-h562-n-k-no"
      ];

      return(
        <>
        <div className='bg-slate-200 py-6'>
        <h1 className='text-center text-red-700 h-8 uppercase'>Where stories never ends</h1>
        <div className='w-[70%] h-[50%] m-auto rounded-lg'>
        <Carousel slides={images} />
        </div>
        <div>
          <h1 className='text-center uppercase h-10 text-red-700 p-2'>Enchanting Tamil Nadu</h1>
        </div>

        <div className='about p-0 m-0 w-[100%] '>
            <div className='w-[100%]'><h1 className='text-center font-extrabold font-sans'>History of the State</h1></div>

            <div className='flex justify-between py-3 '>
              <div><img src='https://static.vecteezy.com/system/resources/thumbnails/009/875/740/small_2x/seamless-pattern-with-mandala-ornament-ethnic-folk-ornament-vintage-monochrome-damask-ornament-decorative-background-great-for-any-design-free-vector.jpg' className='max-w-28 min-h-96'/></div>

              <div className='py-12'><a href='https://www.britannica.com/place/Rajasthan'>
                <img src='https://static3.bigstockphoto.com/8/9/3/large1500/398398295.jpg' width={'240px'} height={'250px'} className='flex align-middle relative top-3' />
                </a></div>

              <div className='w-1/2 py-5'>
                <p className='font-mono font-medium text-sm'>
                Tamil Nadu, located in southeast India, has a rich history dating back to 15,000 BCE to 10,000 BCE.
                The region has been inhabited by three ancient Tamil dynasties, Chera, Chola, and Pandya, who ruled with
                unique culture and language. The Kalabhras invaded the region in the 3rd century, displacing the three ruling kingdoms.
                The Pandyas and Pallavas later restored the traditional kingdoms. The Cholas, who re-emerged in the 9th century, expanded their empire over the southern peninsula,
                spanning almost 3,600,000 km². The Chola navy held power over the Sri Vijaya kingdom in Southeast Asia.
                Rapid political changes in India occurred due to Muslim incursions and the decline of the ancient dynasties.
                The Vijayanagara Empire gained a foothold in the region from the late 14th century until the 16th century.
                The Maratha Empire expanded its territories into present-day Tamil Nadu.<span>Click the picture for more</span></p></div>
              <div><img src='https://static.vecteezy.com/system/resources/thumbnails/009/875/740/small_2x/seamless-pattern-with-mandala-ornament-ethnic-folk-ornament-vintage-monochrome-damask-ornament-decorative-background-great-for-any-design-free-vector.jpg' className='max-w-28 min-h-96'/></div>
            </div>
        </div>



        </div>

        </>
      )

}
