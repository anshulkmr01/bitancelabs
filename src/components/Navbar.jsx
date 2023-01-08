
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import * as Scroll from "react-scroll";
import logo from '../assets/bitanceLogo.png'
import {navItems} from '../constains'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = () =>  {

    const [toggle, setToggle] = useState(false);
    return (
      <>
      <nav className='px-5 sm:px-10 py-3 flex items-center border-b-2 font-medium justify-between'>
        <div className='flex-none'>
          <Link to="/"><img src={logo} className="w-28"/></Link>
        </div>
        <div className='sm:flex-auto'>
          <div className='justify-between flex'>
          <ul className='list-none sm:flex items-center hidden navbar'>
            {navItems.map(nav => {
              if(nav.containerId && nav.containerId != ""){
                return (<li key={nav.id} className="md:px-14 sm:px-8 primary-text">
                          <NavLink to={nav.url} onClick={ ()=>{
                            Scroll.scroller.scrollTo(nav.containerId, { 
                            duration: 1500,
                            delay: 100,
                            smooth: 'easeInOutQuint',
                            })
                          }}>{nav.title}</NavLink>
                        </li>
                        )
              } else {
                return <li key={nav.id} className="md:px-14 sm:px-8 primary-text"> <NavLink to={nav.url}>{nav.title}</NavLink></li>
              }
            } ) }
          </ul>
          <div className='sm:hidden relative'>
          <div onClick={()=> setToggle((prev) => !prev)}>
            {toggle == false ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            }
          </div>
          <div className={`${toggle ? 'flex-col' : 'hidden'} absolute right-0 z-10`}>
            <ul className='list-none sm:flex items-center navbar text-left p-2 mt-2 rounded-md bg-blue-gradient'>
              {navItems.map((nav, index) => (
                <li key={nav.id} className="pr-12 pl-2"> <NavLink to={nav.url}>{nav.title}</NavLink></li>
              ))}
            </ul>
            <Link to="/contact"><button className='primary-btn-sm justify-center mt-3 w-full'>Bitance Now</button></Link>
          </div>
          </div>
          <Link to="/contact"><button className='primary-btn flex-none hidden sm:block'>Bitance Now</button></Link>
          </div>
        </div>
      </nav>
      </>
    )
          }
export default Navbar
