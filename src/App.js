import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useSharedStore from './Store/store';
import About from './About/About';
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';
import MainPage from './MainPage';
import Products from './Product/prodects';
import Header from './header/header';
import Foter from './Foter/Foter';
import Category from './Home/category-w';

function App() {
  const { id } = useSharedStore(); 
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={`/product/${id}`} element={<Products />} />
      </Routes>
      <Header />
      <Foter />
    </>
  );
}

export default App;
