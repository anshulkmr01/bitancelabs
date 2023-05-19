import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Service} from '../constains/services'
const OurService = () => {
const [enableOnclick, setEnableOnClick] = useState(false)
const [serviceDesc, setServiceDesc] = useState({ title: Service[0].serviceTitle, body: Service[0].serviceDesc, image: Service[0].serviceImg})
const [activeService, setActiveService] = useState(1)
  return (
    <div className='px-10 py-24 xs:px-20 md:px-40 bg-image'>
        <div className='grid sm:grid-cols-2 gap-10'>
            <div>
                <h1 className='primary-text font-bold sm:text-6xl xs:text-5xl text-4xl highlight-underline'>Our Services</h1>
                <div className='text-xl primary-text mt-20'>
                    {
                        Service.map(item => {
                            return(
                                <p key={item.id} className={`mt-10 hover:cursor-pointer ${activeService == item.id && "highlight-underline-sm"}`}
                                onMouseEnter={ ()=>{
                                    if(!enableOnclick){
                                        setServiceDesc({title:item.serviceTitle, body:item.serviceDesc, image: item.serviceImg})
                                        setActiveService(item.id)
                                    }  
                                }
                                }
                                
                                onMouseDown={ ()=>{
                                    setEnableOnClick(true)
                                    setServiceDesc({title:item.serviceTitle, body:item.serviceDesc, image: item.serviceImg})
                                    setActiveService(item.id)
                                }
                                }
                                >{item.serviceTitle}
                                </p>
                            )
                         
                    })}
                    
                </div>
            </div>
            <div className=''>
                <div className='bg-blue-gradient rounded-3xl p-9 sticky top-24 min-h-[1250px]'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl '>{serviceDesc.title}</h1>
                        <img src={serviceDesc.image} className="lg:max-w-[6rem] xs:max-w-[5rem] max-w-[4rem]" />
                    </div>
                    <div className='text-base '>
                        {serviceDesc.body.map(desc => (
                            <p className='mt-10'>
                                {desc}
                            </p>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center mt-32'>
            <Link to="/contact"><button className='primary-btn font-semibold'>Get Bitance Solutions</button></Link>
        </div>
    </div>
  )
}

export default OurService