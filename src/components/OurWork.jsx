import React from 'react'
import { Link } from 'react-router-dom'
import GameControll from '../assets/about/game-controller.png'
const OurWork = () => {
  return (
    <div className='px-10 py-28 xs:px-20 md:px-40 '>
    <div className='sm:flex'>
      <div className='w-full' data-aos="fade-right" data-aos-delay="200" data-aos-duration="500" data-aos-easing="linear">
      <h1 className='secondary-text font-bold md:text-7xl xs:text-5xl text-4xl'>Our Work</h1>
      <h5 className='mt-3 xs:text-2xl text-1xl font-semibold primary-text'>Wide range of products</h5>
        <p className='mt-10 primary-text xs:text-xl md:w-3/4'>
        We at Bitance Labs envision a future where <br/> IT development projects extend as a form of human expression. We hereby put our passion for software development into purpose
        where we make our client ideas into a reality by providing
        creative non-replicable solutions.
        </p>
      </div>
      <div className='w-full text-center animate-float-2s'>
        <img src={GameControll} className="w-3/4 m-auto"/>
      </div>
    </div>
    <div className='text-center'>
        <Link to="/work"><button className='primary-btn font-semibold'>Explore More</button></Link>
    </div>
    </div>
  )
}

export default OurWork
