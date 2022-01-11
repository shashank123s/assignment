
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Services from './Componets/Services';
import Product from './Componets/Product';
import Portfolio from './Componets/Portfolio';
import Home from './Componets/Home';
import About from './Componets/About';
import Topnav from './Componets/Topnav';
import Navbar from './Componets/Navbar';
import Footermain from './Componets/Footermain';
import Footertop from './Componets/Footertop';

export default function App() {
  return (
    <BrowserRouter>
    <div className= "app-container">
      <Topnav />
      <Navbar title="Mysite"/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path= '/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
      <Footertop />
      <Footermain />
      </div>
    </BrowserRouter>
  )
}
