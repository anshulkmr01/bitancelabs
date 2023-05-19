import React from 'react'
import CountUp, { useCountUp } from 'react-countup'
const Stats = () => {

  

  return (
    <div className='px-10 xs:px-20 md:px-40 bg-blue-gradient'>
      <div className='py-24 lg:flex'>
      <div className='lg:w-1/2 lg:text-left text-center mb-10 lg:mb-0'>
          <h3 className='third-text font-semibold sm:text-5xl xs:text-4xl  text-3xl mb-2'>We take Pride in </h3>
          <h2 className='text-white font-bold sm:text-6xl xs:text-5xl text-4xl'>Our Numbers</h2>
       </div>
       <div className='lg:w-2/3 flex justify-around text-center md:items-center'>
           <div className='text-3xl px-3'>
              <CountUp redraw={true} end={110} duration={3} suffix="+" enableScrollSpy={true}/>
              <h4 className='text-xl'>Projects <br/> Completed</h4>
            </div>

            <div className='text-3xl px-3'>
              <CountUp redraw={true} end={65} duration={3} suffix="+" enableScrollSpy={true}/>
              <h4 className='text-xl'>Satisfied <br/> Clients</h4>
            </div>
            <div className='text-3xl px-3'>
            &nbsp;&nbsp;<CountUp redraw={true} end={35} duration={3} suffix="+" enableScrollSpy={true}/>
              <h4 className='text-xl'>Team<br/>Size</h4>
            </div>
            <div className='text-3xl px-3'>
                <CountUp redraw={true} end={10} duration={3} suffix="+" enableScrollSpy={true}/>
              <h4 className='text-xl'>Country <br/> Served</h4>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Stats
