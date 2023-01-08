import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AboutPage, ContactPage, WorkPage, ServicePage} from './index'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AboutPage/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/work' element={<WorkPage/>}/>
    </Routes>
  </BrowserRouter>
  )
export default App