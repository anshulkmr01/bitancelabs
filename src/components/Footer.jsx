import React from 'react'
import { footerMenu } from '../constains'
import { Link, NavLink } from 'react-router-dom';
import BitanceLogo from '../assets/footer/bitance-white-logo.png'
import facebook from '../assets/footer/facebook.png'
import linkedin from '../assets/footer/linkedin.png'
import twitter from '../assets/footer/twitter.png'
import pin from '../assets/footer/pin.png'
const Footer = () => {
  return (
    <>
        <div className='px-10 py-10 xs:px-20 bg-blue-gradient md:px-40'>
        <h3 className='text-center sm:text-5xl xs:text-4xl  text-3xl mb-2 txet-center'>Time to Bitance</h3>
        </div>
        <div className='px-10 py-10 xs:px-20 bg-primary relative relative md:px-40'>
            {/* <img src={pin} className="absolute md:top-[-140px] md:right-[200px] w-1/6 top-[-62px] right-[20px]" /> */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-white'>
                <div className='mt-10'>
                    <div>
                        <img src={BitanceLogo} className="w-[170px] mb-8" alt="Bitance logo white"/>
                    </div>
                    <p className='text-xl'>1401, VJ Builders, Hinjawadi, Phase-2, Pune, Maharastra</p>
                </div>
                <div className='mt-10'>
                    <ul>
                        {footerMenu.map((item, index) => (
                            <li key={item.id} className="text-2xl xs:text-xl sm:text-2xl mb-5"><NavLink to={item.url}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div className='mt-10'>
                    <h1 className="text-2xl xs:text-xl sm:text-2xl mb-3">Follow us</h1>
                    <ul className='flex mt-6'>
                        <li className='mr-6'><a href='#'><img src={facebook} alt="bitance facebook"/></a></li>
                        <li className='mr-6'><a href='#'><img src={linkedin} alt="bitance linkedin"/></a></li>
                        <li className='mr-6'><a href='#'><img src={twitter} alt="bitance twitter"/></a></li>
                    </ul>
                </div>
            </div>
            
            <div className='text-center text-white mt-10'>
                © Copyrights reserved by Bitance Labs
            </div>
        </div>
    </>
  )
}

export default Footer