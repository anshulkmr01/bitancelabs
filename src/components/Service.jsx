import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import left_areo from '../assets/about/circle-arrow-left.png'
import right_aero from '../assets/about/circle-arrow-right.png'
import service_bg from '../assets/service/service-bg-n.png'
import { Link } from 'react-router-dom'
import { Service as serviceItem } from '../constains/services'
const Service = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
const serviceCaroselItem = serviceItem.map(item => {
    return(
        <div data-value={item.id}>
          <Link to="/service">
            <div className='relative'>
              <img className='m-auto w-1/2' src={service_bg}/>
              <img className="m-auto w-1/4 absolute top-0 bottom-0 right-0 left-0"src={item.serviceImg} />
              <h1 className='text-center secondary-text font-bold text-2xl mt-4'>{item.serviceTitle}</h1>
            </div>
          </Link>
        </div>
      
    )
} );

const onInitialized = (e) => {
  console.debug(`Start position(activeIndex) on init: ${e.item}. Event:`, e);
};

const onSlideChange = (e) => {
  console.debug(`Item's position before a change: ${e.item}. Event:`, e);
};

const onSlideChanged = (e) => {
  console.debug(`Item's position after changes: ${e.item}. Event:`, e);
};

const onResized = (e) => {
  console.debug(`Item's position after resize: ${e.item}. Event:`, e);
};

  return (
    <div className=''>
    <div className='mt-10 px-5 xs:px-20'>
      <h1 className='secondary-text font-semibold text-center text-2xl highlight-underline-center'>Connecting your unique ideas to Communities</h1>
    </div>
    <div className='mt-28 sm:flex justify-between px-10 xs:px-20 md:px-40'>
      <div className='sm:w-1/2' data-aos="fade-right" data-aos-delay="400" data-aos-duration="500" >
        <h1 className='secondary-text font-bold md:text-7xl text-5xl'>Our Services</h1>
      </div>
      <div className='sm:w-1/2 mt-12 sm:mt-0' data-aos="fade-left" data-aos-delay="500" data-aos-duration="500" >
        <p className='primary-text lg:px-24 text-xl'>
          Providing cutting-edge creative and innovative solution to support your business ideas
        </p>
      </div>
    </div>
    <div className='px-10 xs:px-20 pt-20'>
    <AliceCarousel
        mouseTracking
        keyboardNavigation={true}
        renderPrevButton={() => {
          return <button className="absolute left-0 top-0 bottom-0 m-auto"><img src={left_areo}/></button>
        }}
        renderNextButton={() => {
          return <button className="absolute right-0 top-0 bottom-0 m-auto"><img src={right_aero}/></button>
        }}
        items={serviceCaroselItem}
        disableDotsControls
        autoPlay={true}
        autoPlayInterval={2500}
        controlsStrategy="responsive"
        infinite={true}
        responsive={responsive}
        onInitialized={onInitialized}
        onSlideChange={onSlideChange}
        onSlideChanged={onSlideChanged}
        onResized={onResized}
    />
    </div>
    <div className='text-center mb-20 mt-20'>
      <Link to="/service"><button className='primary-btn font-semibold'>Explore More</button></Link>
    </div>
    </div>
  )
}

export default Service
