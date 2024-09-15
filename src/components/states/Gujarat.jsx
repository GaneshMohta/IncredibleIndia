import React from 'react'
import Carousel from './Carousel';

export default function Gujarat() {
    const images = [
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRPT29SL6ep3Op2pzpor1UOn_xFIwqf6yGR69NpR1xmI3P5CLhPOKOYheAcaCi4aOPVDp9om2BWyRtvEAaSV5xp4aCet7DAkd6iur4UEQ",
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQeXyWOrlqEOKb7FrJ6gbFX9fr20DB6_GunnKTsNUZZ1SYZ9vHHui-smCHhrG6zn6bThFSuv35In2WelYVXZC5Gy9DdahG5K7sn5CNkGQ",
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSJSuqHyzBGW_NSROss9z_caAcrZEocm-SUyto8ikHE_uS2n6_e1iF0gqEn_6toB5pqeoXxWheCkyqJI-DNAkJsxSg73OIXt-U4Whtyrg",
        "https://lh5.googleusercontent.com/p/AF1QipNqsb7mRNcXiB1rp0f-hAkDOXolZWrrxgF72TRJ=w972-h562-n-k-no"
      ];

      return(
        <>
        <div className='bg-slate-200 py-6'>
        <h1 className='text-center text-red-700 h-8 uppercase'>Padharo mare desh</h1>
        <div className='w-[70%] h-[50%] m-auto rounded-lg'>
        <Carousel slides={images} />
        </div>
        <div>
          <h1 className='text-center uppercase h-10 text-red-700 p-2'>Incredible state of india</h1>
        </div>

        <div className='about p-0 m-0 w-[100%] '>
            <div className='w-[100%]'><h1 className='text-center font-extrabold font-sans'>History of the State</h1></div>

            <div className='flex justify-between py-3 '>
              <div><img src='https://static.vecteezy.com/system/resources/thumbnails/009/875/740/small_2x/seamless-pattern-with-mandala-ornament-ethnic-folk-ornament-vintage-monochrome-damask-ornament-decorative-background-great-for-any-design-free-vector.jpg' className='max-w-28 min-h-96'/></div>

              <div className='py-14'><a href='https://www.britannica.com/place/Rajasthan'>
                <img src='https://mir-s3-cdn-cf.behance.net/projects/404/e778bb195966849.Y3JvcCwxOTkyLDE1NTgsMCwxOQ.jpg' width={'240px'} height={'250px'} className='flex align-middle relative top-3' />
                </a></div>

              <div className='w-1/2 py-5'>
                <p className='font-mono font-medium text-sm'>Rajasthan, the largest state in India, was once known as Rajputana and had a pre-historic culture
                similar to the Indus Valley civilization. The Chauhans dominated Rajput affairs from the seventh century and became an imperial power by the 12th century.
                Other prominent states included Marwar, Jaipur, Bundi, Kota, Bharatpur, and Alwar. The British Treaty of Subordinate Alliance in 1818 protected the princes' interests,
                leaving the people discontented. After the 1857 revolt, the people united under Mahatma Gandhi to contribute to the freedom movement.
                The introduction of provincial autonomy in 1935 intensified the agitation for civil liberties and political rights in Rajasthan.
                The States Reorganisation Act (1948) led to the Matsya Union (1948), which merged with other states, eventually becoming the United State of Greater Rajasthan in 1949. In 1958,
                the present State of Rajasthan was formally formed, with Ajmer state, Abu Road Taluka, and Sunel Tappa joining it. Rajasthan's western flank borders Pakistan,
                while Punjab, Haryana, Uttar Pradesh, and Madhya Pradesh border it in north-east, south-east, and south-west.<span className='text-blue-300'> Click the picture to know more</span></p></div>
              <div><img src='https://static.vecteezy.com/system/resources/thumbnails/009/875/740/small_2x/seamless-pattern-with-mandala-ornament-ethnic-folk-ornament-vintage-monochrome-damask-ornament-decorative-background-great-for-any-design-free-vector.jpg' className='max-w-28 min-h-96'/></div>
            </div>
        </div>



        </div>

        </>
      )

}
