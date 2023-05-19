import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AeroUp from './../assets/circle-arrow-up.png';
function ScrollToTop() {
  
  const [visible, setVisible] = useState("hidden")

  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled);
    if (scrolled > 300){
      setVisible("block")
    } 
    else if (scrolled <= 300){
      setVisible("hidden")
    }
  };

  useEffect(()=>{
    {
      window.addEventListener('scroll', toggleVisible);
    }
  })
    return (
      <div className={`${visible} fixed z-20 bg-white rounded-full cursor-pointer bottom-8 right-8`}
      onClick={()=>{
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
      >
        <span><img src={AeroUp} className='p-1' /></span>
      </div>
    )
}

export default ScrollToTop