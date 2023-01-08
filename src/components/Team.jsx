import React from 'react'
import FounderImg from '../assets/about/founder-img.png'
const Team = () => {
  return (
    <div className='mt-28'>
      <h1 className='w-3/4 sm:w-1/3 font-bold sm:text-5xl xs:text-4xl text-3xl'>Core Team</h1>
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-8 sm:gap-16 mt-16'>
      <div className=''>
            <img src={FounderImg} className="w-full"/>
            <div className='mt-8 text-center'>
            <h3 className='text-md'>Vidit Kumar</h3>
            <h3 className='text-md'>Co-Founder</h3>
            </div>
          </div>
          <div className=''>
            <img src={FounderImg} className="w-full"/>
            <div className='mt-8 text-center'>
            <h3 className='text-md'>Vidit Kumar</h3>
            <h3 className='text-md'>Co-Founder</h3>
            </div>
          </div>
          <div className=''>
            <img src={FounderImg} className="w-full"/>
            <div className='mt-8 text-center'>
            <h3 className='text-md'>Vidit Kumar</h3>
            <h3 className='text-md'>Co-Founder</h3>
            </div>
          </div>
          <div className=''>
            <img src={FounderImg} className="w-full"/>
            <div className='mt-8 text-center'>
            <h3 className='text-md'>Vidit Kumar</h3>
            <h3 className='text-md'>Co-Founder</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Team
