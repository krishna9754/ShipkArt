import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products'
import Contact from './components/Contact'
import Cart from './components/Cart'
import ErrorPage from './components/ErrorPage'
import SingleProduct from './components/SingleProduct'
import Navbar from './common/Navbar';
import Fotter from './common/Fotter';


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/products" element = {<Products />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/cart" element = {<Cart />}/>
          <Route path="*" element = {<ErrorPage />}/>
          <Route path="/singleproduct/:id" element = {<SingleProduct />}/>
        </Routes>
        <Fotter />
      </Router>
      </>
  )
}

export default App;
