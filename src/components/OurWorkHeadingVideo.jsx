import React from 'react'
import StarStrip from '../assets/work/start-strip.png'
import WorkVideo from './WorkVideo'
import {videoItems} from '../constains'
const OurWorkHeadingVideo = () => {
  return (
    <>
    <div className='px-10 py-24 xs:px-20 md:px-40 bg-blue-gradient  relative sm:flex'>
    <img src={StarStrip} className="absolute lg:top-[-40px] sm:right-[20%] md:top-[-25px] md:w-[150px] lg:w-[248px] xs:top-[-18px] xs:w-28 w-14 top-[-8px] right-[10%]"/>
      <div className='w-full sm:w-3/4 md:w-full'>        
        <h2 className='text-white font-bold sm:text-6xl xs:text-5xl text-4xl'>Our Work</h2>      
      </div>
    </div>
    <div className='px-10 py-24 xs:px-20 md:px-40 bg-image'>
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-14'>
      {videoItems.map((video, index) => (
        <div className="" key={video.id}>
          <WorkVideo url={video.url}/>
        </div>
      ))}
    </div>
    <div className='text-center mt-28'>
      <a target="_blank" href='https://drive.google.com/drive/folders/1cJdZZhVTgbmrdA2NXu21_BeNfbMVCWRj?usp=share_link'><button className='primary-btn font-semibold'>Download Portfolio</button></a>
    </div>
    </div>
    </>
  )
}

export default OurWorkHeadingVideo
