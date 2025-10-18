import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import { Route, Routes,useLocation } from 'react-router-dom'
import Home from './pages/Home';
import AllEstates from './pages/AllEstates';
import EstateDetails from './pages/EstateDetails';
import MyProperty from './pages/MyProperty';
import PropertyReg from './components/PropertyReg';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
    {!isOwnerPath && <Navbar />}
    <PropertyReg />
    <div className='min-h-[70vh]'>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/rooms' element={<AllEstates/>} />
    <Route path='/rooms/:id' element={<EstateDetails/>} />
    <Route path='/my-bookings' element={<MyProperty/>} />
   </Routes>
    </div>
    <Footer />
    </div>
  )
}

export default App