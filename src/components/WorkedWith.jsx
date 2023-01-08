import React from 'react'
import client_1 from '../assets/clients/system-agency.png'
const WorkedWith = () => {
  return (
    <div className='px-10 xs:px-20 md:px-40'>
      <div className=''>
        <h2 className=' text-center secondary-text font-bold sm:text-5xl xs:text-4xl text-3xl'>We have worked with</h2>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-4 mt-10'>
        <div className=''>
            <img src={client_1}/>
          </div>
          <div className=''>
            <img src={client_1}/>
          </div>
          <div className=''>
            <img src={client_1}/>
          </div>
          <div className=''>
            <img src={client_1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkedWith
