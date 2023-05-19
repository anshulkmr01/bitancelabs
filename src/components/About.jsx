import React from 'react'
import Globe from '../assets/about/globe.png'
import Team from './Team';
import Subscribe from './Subscribe';
const About = () => {
  return (
    <div className='px-10 py-16 xs:px-20 md:px-40 bg-blue-gradient relative mt-40' id="about">
      <div className='absolute w-1/3 top-[-50px] xs:top-[-75px] md:top-[-175px] md:w-[420px] right-20 animate-float-2s'>
        <img src={Globe}/>
      </div>
      <div className=''>
        <h2 className='w-full xs:w-1/3 md:w-3/4 font-bold sm:text-5xl xs:text-4xl text-2xl'>Bitance Backstage</h2>
        <h5 className='mt-5 text-3xl'>About the Company</h5>
      </div>
      <div className='text-justify'>
        <p className='mt-14 sm:mt-32 sm:text-2xl' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500" >
          Bitance Labs is the ultimate white-label solution for all your software development projects. We pride ourselves on top-notch problem-solving expertise to produce the best innovative designs, customized perfectly to our client's goals and aspirations. Our highly motivated and dedicated teams meticulously conduct research and survey to always bring optimum satisfaction to all undertaken projects.
        </p>
        <p className='mt-10 sm:text-2xl' data-aos="fade-up" data-aos-delay="700" data-aos-duration="500">
          We provide a wide range of IT development and cybersecurity services for businesses operating in the digital world. Our current services include but are not limited to Blockchain Development, Customized Softwares, AI/ML System, Cyber Security, Smart Contracts, NFT Token Development, NFT Market Place Development, Web and Mobile App Development, Game Development as well as Content Writing, Illustration and Graphics, and Video Making.
        </p>
        <p className='mt-10 sm:text-2xl' data-aos="fade-up" data-aos-delay="900" data-aos-duration="500">
          Our specialists design the best solutions, focusing on the needs of the client. Currently, our workforce is around 35+ which comprises Solidity, Rust, Aptos, Javascript, Node.js, React.js, Vue.js, Python, Java, C, C++, Flutter, Angular, Truffle, IPFS, Ganache, Chainlink, Reservior, Redux, Express, Php, Laravel, Mysql, Mongodb, Graphql, AWS, Git, Wordpress, Figma, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, Unity & Unreal Engine developers.
        </p>
      </div>
      {/* <Team/> */}
      <Subscribe/>
    </div>
  )
}

export default About
