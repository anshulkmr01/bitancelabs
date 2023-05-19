import React from 'react'
import { footerMenu } from '../constains'
import { Link, NavLink } from 'react-router-dom';
import BitanceLogo from '../assets/footer/bitance-logo.jpeg'
import facebook from '../assets/footer/facebook.png'
import linkedin from '../assets/footer/linkedin.png'
import twitter from '../assets/footer/twitter.png'
import reddit from '../assets/footer/reddit.png'
import telegram from '../assets/footer/telegram.png'
import linktree from '../assets/footer/linktree.png'
import pin from '../assets/footer/pin.png'
const Footer = () => {
  return (
    <>
        
        <div className='px-10 py-10 xs:px-20 bg-blue-gradient md:px-40'>
        <h3 className='text-center sm:text-5xl xs:text-4xl  text-3xl mb-2 txet-center'>Time to Bitance</h3>
        </div>
        <div className='px-10 py-10 xs:px-20 relative md:px-40'>
            <img src={pin} className="absolute md:right-[100px] w-[100px] top-[-87px] right-[20px]" />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-primary'>
                <div className='mt-10'>
                    <div>
                        <img src={BitanceLogo} className="w-[170px] mb-8" alt="Bitance logo white"/>
                    </div>
                    <p className='text-xl'><span className='font-bold'></span>1401, VJ Builders, Hinjawadi,<br/> Phase-2, Pune, Maharastra, <br/>India 411053</p>
                </div>
                <div className='mt-10'>
                    <ul className='text-left'>
                        {footerMenu.map((item, index) => (
                            <li key={item.id} className="text-xl xs:text-lg  mb-1"><NavLink to={item.url}>{item.title}</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div className='mt-10'>
                    <h1 className="text-xl xs:text-lg mb-1">Follow us</h1>
                    <ul className='flex mt-6'>
                        <li className='mr-6'><a href='https://www.facebook.com/people/Bitance-Labs/100091691144423/'><img src={facebook} alt="bitance facebook"/></a></li>
                        <li className='mr-6'><a href='https://www.linkedin.com/company/91135412/'><img src={linkedin} alt="bitance linkedin"/></a></li>
                        <li className='mr-6'><a href='https://twitter.com/bitancelabs'><img src={twitter} alt="bitance twitter"/></a></li>
                    </ul>
                    <ul className='flex mt-6'>
                        <li className='mr-6'><a href='https://www.reddit.com/user/Bitancelabs/'><img src={reddit} alt="bitance Reddit"/></a></li>
                        <li className='mr-6'><a href='https://t.me/bitancelabs'><img src={telegram} alt="bitance Telegram"/></a></li>
                        <li className='mr-6'><a href='https://linktr.ee/bitancelabs'><img src={linktree} alt="bitance Linktree"/></a></li>
                    </ul>
                </div>
            </div>
            
            <div className='text-center text-primary mt-10'>
                © Copyrights reserved by Bitance Labs
            </div>
        </div>
    </>
  )
}

export default Footer