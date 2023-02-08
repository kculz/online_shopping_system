import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsList from './pages/ProductsList'
import AddProduct from './pages/admin/AddProduct'

function App() {

  return (
    <div className="">
     <BrowserRouter>
     <Navbar />
      <Routes>
         <Route  path='/' element={<Hero />} />
         <Route path='/products' element={<ProductsList />} />
         <Route path='/add-product' element={<AddProduct />} />
     
      </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App
