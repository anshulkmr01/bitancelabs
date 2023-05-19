import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AboutPage, ContactPage, WorkPage, ServicePage} from './index'
import ScrollToTop from './components/ScrollToTop'
 function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AboutPage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='service' element={<ServicePage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      <Route path='work' element={<WorkPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App