import banner from '../assets/about/main-banner.png'
import rocket from '../assets/about/rocket.png'
import faq from '../assets/about/FAQ-icon.png'
import info from '../assets/about/info-about-icon.png'
import bitnanceLabsText from '../assets/about/bitance-labs-text.png'
import { Link } from 'react-router-dom'
import 'animate.css'

const Banner = () => {
  return (
  <>
    <div className={`px-10 xs:px-20 md:px-40 pt-32 pb-72 xs:pb-28 sm:pb-48 flex-col sm:flex bg-cover relative bg-no-repeat bg-[url('/src/assets/about/main-banner.png')]`}>
      <div className="w-1/2" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
        <div>
          <img src={bitnanceLabsText}/>
        </div>
        <h1 className='text-white md:text-7xl text-5xl mt-5 font-semibold'>
          Where innovation never stops
        </h1>
        <Link to="/contact"><button className='primary-btn mt-10 font-semibold'>Bitance Now</button></Link>
      </div>
      <div className='animate-float-2s absolute xs:right-20 w-1/3 md:right-44 lg:w-[370px] sm:right-28 xs:top-20 bottom-[-20px]'>
        <img src={rocket} className="w-full" alt="rocket image"/>
      </div>
      {/* <div className='absolute right-10 self-center top-0 bottom-0 flex items-center'>
        <div className='flex-col'>
        <div className='mb-28 '>
          <img src={faq} className="w-3/4"/>
        </div>
        <div className='mt-28 '>
          <img src={info} className="w-3/4"/>
        </div>
        </div>
      </div> */}
    </div>
  </>
  )
}

export default Banner
