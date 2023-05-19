import React from 'react'
import {Clients} from '../constains/clients'
const WorkedWith = () => {
  return (
    <div className='px-10 xs:px-20 md:px-40'>
      <div className=''>
        <h2 className=' text-center secondary-text font-bold sm:text-5xl xs:text-4xl text-3xl'>Our Partners</h2>
        <div className='grid md:grid-cols-6 sm:grid-cols-5 xs:grid-cols-3 gap-4 mt-10'>
        {
            Clients.map(item => {
                return(
                  <div className=' justify-center flex items-center p-5'>
                    <img src={item.img} className="w-full "/>
                  </div>
                )
        })}
        </div>
      </div>
    </div>
  )
}

export default WorkedWith
