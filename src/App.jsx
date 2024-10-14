import { useEffect, useState } from 'react'
import './App.css'
import Navbar2 from './components/Navbar2'
import Navbar1 from './components/Navbar1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Accessories from './pages/Accessories'
import Shoes from './pages/Shoes'
import LikeNew from './pages/LikeNew'
import Searchpage from './pages/Searchpage'
import Loginpage from './pages/Loginpage'
import LikeItem from './pages/LikeItem'
import Cart from './pages/Cart'
import Footer from './components/Footer';

function App() {
  const[data,setData]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/products`).
    then((res)=>res.json()).
    then((data)=>{
      setData(data);
      console.log(data)
    })
  },[])

  return (
    <>
      <Router>
        <Navbar1 />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men data={data}/>} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/likenew" element={<LikeNew data={data}/>} />
          <Route path="/searchbar" element={<Searchpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/likeItem" element={<LikeItem />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
