
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/bitanceLogo.png'
import {navItems} from '../constains'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({once: true});

const Navbar = () =>  {

    const [toggle, setToggle] = useState(false);
    const [logoWidthClass, setLogoWidthClass] = useState("w-28");
    
    const listenScrollEvent = () => {
      window.scrollY > 30 ? setLogoWidthClass("w-20") : setLogoWidthClass("w-28");
    };

    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

    return (
      <>
      <nav className='sticky top-0 z-50 bg-white px-5 sm:px-10 py-1 flex items-center border-b-2 font-medium justify-between'>
        <div className='flex-none'>
          <HashLink to="/"><img src={logo} className={`${logoWidthClass} transition-all duration-500`}/></HashLink>
        </div>
        <div className='sm:flex-auto'>
          <div className='justify-between flex'>
          <ul className='list-none sm:flex items-center hidden navbar'>
            {navItems.map(nav => {
              if(nav.containerId && nav.containerId != ""){
                return (<li key={nav.id} className="md:px-14 sm:px-8 primary-text">
                          <NavLink to={nav.url}>{nav.title}</NavLink>
                        </li>
                        )
              } else {
                return (
                  <li key={nav.id} className="md:px-14 sm:px-8 primary-text navitem">
                  <NavLink to={nav.url} state={{ some: "0" }}>{nav.title}</NavLink>
                  </li>
                )
              }
            } ) }
            <li className="md:px-14 sm:px-8 primary-text">
              <HashLink to="/#about" smooth>About</HashLink>
            </li>
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
            <Link to="/contact"><button className='primary-btn-sm justify-center mt-3 w-full'>Get Bitance Solutions</button></Link>
          </div>
          </div>
          <Link to="/contact"><button className='primary-btn flex-none hidden sm:block'>Get Bitance Solutions</button></Link>
          </div>
        </div>
      </nav>
      </>
    )
          }
export default Navbar
