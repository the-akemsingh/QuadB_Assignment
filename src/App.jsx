import './App.css'
import Login from './components/users/Login';
import { BrowserRouter as MainRouter, Route, Routes, useLocation } from 'react-router-dom';
import Register from './components/users/Register';
import Home from './components/Home';
import AdNav from './utils/AdNav';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';
import Shop from './components/Shop';
import ProductPage from './components/products/ProductPage';
import CreateProduct from './components/admin/Product';
import Cart from './components/Cart';

const MainContent = () => {

  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password';

  return (
    <>
      {!hideNavbar && <AdNav />}
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/products" element={<CreateProduct />} />
      </Routes>
      {!hideNavbar && <Footer />}
    </>
  )
}

const App = () => {

  return (
    <MainRouter>
      <MainContent />
    </MainRouter>
  );
};

export default App
