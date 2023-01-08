import React from 'react'
import { Link } from 'react-router-dom'
import service_sheald from '../assets/service/service.png'
const OurService = () => {
  return (
    <div className='px-10 py-24 xs:px-20 md:px-40 bg-image'>
        <div  className='grid sm:grid-cols-2 gap-10'>
            <div>
                <h1 className='primary-text font-bold md:text-7xl text-5xl highlight-underline'>Our Services</h1>
                <div className='text-xl primary-text mt-20'>
                    <p className='mt-10'>
                        Custom Web and Mobile App Developmemt
                    </p>
                    <p className='mt-10'>
                        NFT Development (NFT Mining, Stalking, Marketplace)
                    </p>
                    <p className='mt-10'>
                        De Fi Plateform
                    </p>
                    <p className='mt-10'>
                        Cryptocurrency Exchange
                    </p>
                    <p className='mt-10'>
                        Crypto wallets
                    </p>
                    <p className='mt-10'>
                        Token, and Custom coin Creation etc.
                    </p>
                    <p className='mt-10'>
                        Blockchain Development Services
                    </p>
                    <p className='mt-10'>
                        <h1 className='secondary-text font-bold text-2xl highlight-underline-sm'>Blockchain security</h1>
                    </p>
                    <p className='mt-10'>
                        Metaverse/ Gaming
                    </p>
                    <p className='mt-10'>
                        Custom Software Development
                    </p>
                    <p className='mt-10'>
                        AI/ML application
                    </p>
                    <p className='mt-10'>
                        Cyber Sceurity
                    </p>
                    <p className='mt-10'>
                        Software penetration testing
                    </p>
                    <p className='mt-10'>
                        Graphics, Content writing, Video Creation
                    </p>
                </div>
            </div>
            <div className=''>
                <div className='bg-blue-gradient rounded-3xl p-9'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl '>Blockchain Security</h1>
                        <img src={service_sheald} className="lg:max-w-[6rem] xs:max-w-[5rem] max-w-[4rem]" />
                    </div>
                    <div className='text-xl '>
                        <p className='mt-10'>
                            When it comes to dealing with crypto and tokens, we value and build TRUST. Our Blockchain Security experts are adept at building decentralized systems that duplicates all information, transactions, and sensitive data to all verified members in the network at the same time so that all stockholders are on an equal basis.
                        </p>
                        <p className='mt-10'>
                            Our Specialized Security Auditors follow a two-step protocol for easy Detection and
                            Elimination of vulnerabilities
                            discovered in your system. Investigate and double-check the codes for maximum security Recommend and develop
                            adjustments for safe access of
                            data
                        </p>
                        <p className='mt-10'>
                            Upon request, our team is equipped to provide an audit report with an executive summary, vulnerability details, and mitigation guidance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center mt-32'>
            <Link to="/contact"><button className='primary-btn font-semibold'>Bitance Now</button></Link>
        </div>
    </div>
  )
}

export default OurService