import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_74oy5hs', 'template_ea72hce', form.current, 'hJ2a5zkCoTOEPPur8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='px-0 md:px-40 mt-24'>
    <div className=''>
      <h1 className='text-center font-bold sm:text-2xl text-1xl'>Subscribe to our Newsletter</h1>
      <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className='mt-7 w-full sm:w-10/12 m-auto block relative'>
          <label className='text-gray-500 font-semibold absolute left-10 text-sm top-1'>Name*</label>
          <input className='rounded-full w-full px-10 pt-5 pb-3 text-black' name='user_name'/>
        </div>
        <div className='mt-7 w-full sm:w-10/12 m-auto block relative'>
          <label className='text-gray-500 font-semibold absolute left-10 text-sm top-1'>Email*</label>
          <input className='rounded-full w-full px-10 pt-5 pb-3 text-black' name='user_email'/>
        </div>
        <div className='text-center mt-7 font-semibold'>
          <button type="submit" className='primary-btn'>Subscribe now</button>
        </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Subscribe
