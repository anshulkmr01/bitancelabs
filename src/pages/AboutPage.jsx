import {Navbar, Banner, Service, Stats, Work, WorkedWith, About, Footer} from '../components';
import ScrollToTop from '../components/ScrollToTop';
const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Service/>
        <Stats/>
        <Work/>
        <WorkedWith/>
        <About/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default AboutPage
