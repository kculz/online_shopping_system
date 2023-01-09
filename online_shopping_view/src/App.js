import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './containers/header/Header'
import Navbar from './containers/navbar/Navbar'
import Hero from './containers/hero/Hero';
import Footer from './containers/footer/Footer'
import Sign_up from './containers/auth_pages/Sign_up'
import Sign_in from './containers/auth_pages/Sign_in'
import ProductDetails from './containers/products/ProductDetails';
import ProductsList from './containers/products/ProductsList';
import NotFound from './containers/404/NotFound';
import ProductUpload from './containers/adminPages/ProductUpload';

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Hero />} />
        <Route exact path='/signin' element={<Sign_in />} />
        <Route exact path='/shop' element={<ProductsList />} />
        <Route exact path='/products/:productId' element={<ProductDetails />} />
        <Route exact path='*' element={<NotFound />} /> */}
      </Routes>
      {/* <ProductUpload /> */}
      <Sign_in />
      <Footer />
    
    </BrowserRouter>
  );
}

export default App;
