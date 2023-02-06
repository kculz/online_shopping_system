import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsList from './pages/ProductsList'

function App() {

  return (
    <div className="">

     <BrowserRouter>
      <Navbar />
      <Routes>
         <Route exact path='/' element={<Hero />} />
         <Route path='/products' element={<ProductsList />} />
     
      </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App
