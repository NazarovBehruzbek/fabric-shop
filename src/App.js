import Foter from "./Foter/Foter";
import Header from "./header/header";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Collection from './Collection/Collection';
import Contact from './Contact/Contact';

function App() {
  return (
      <>
        {/* <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes> */}
              <Header />
              {/* <Outlet/>
              <Foter/> */}
      </>
  );
}

export default App;
