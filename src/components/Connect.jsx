import React from 'react'
import {inputItems, workItems} from '../constains'
import Input from './Input'
const Connect = () => {
  return (
    <>
    <div className='px-10 py-24 xs:px-20 md:px-40 bg-blue-gradient sm:flex'>
      <div className='w-full sm:w-3/4 md:w-full'>        
        <h2 className='text-white font-bold sm:text-6xl xs:text-5xl text-4xl'>Let's Connect</h2>
      </div>
      <div className='w-full pt-8 sm:pt-0'>
        <p className='text-2xl'>
        We are convinced that drawing up a quotation is something that requires an indepth analysis of your project. In order to get things started we'd like you to fill the form & our team will contact you
        </p>
      </div>
    </div>
    <div className='sm:flex px-10 py-16 xs:px-20 md:px-40 bg-image'>
     <div className='w-full'>
        <h2 className="font-bold text-2xl xs:text-xl sm:text-2xl primary-text  before:content-[''] before:absolute before:w-[11px] before:top-[13px] before:left-[-30px] before:h-[11px] before:rounded-full before:bg-[#17215B] relative">What would you like us to do for you?</h2>
        <ul className='list-none mt-8'>
        {workItems.map((work, index) => (
              <li key={work.id} className="primary-text text-2xl xs:text-xl sm:text-2xl mt-3 font-semibold"><input type="radio" name='service' id={work.id} className="mr-2"/> <label for={work.id}>{work.title}</label></li>
            ))}
        </ul>
    </div>
    <div className='w-full'>
      {inputItems.map((input, index) => (
        <Input key={input.id} type={input.type} label={input.label} name={input.name} placeholder={input.placeholder}/>
      ))}
      <div className='text-center'>
        <button className='primary-btn font-semibold text-xl px-16 mt-8'>Submit Info</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Connect
