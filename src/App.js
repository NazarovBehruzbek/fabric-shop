import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useSharedStore from './Store/store';
import About from './About/About';
import Collection from './Collection/Collection';
import MainPage from './MainPage';
import Products from './Product/prodects';
import Header from './header/header';
import Foter from './Foter/Foter';
import Contacts from './Contact/Contact';

function App() {
  const { id } = useSharedStore(); 
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path={`/product/${id}`} element={<Products />} />
      </Routes>
      <Header />
      <Foter />
    </>
  );
}

export default App;
