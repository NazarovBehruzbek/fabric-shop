import React from "react";
import Home from './Home/Home';
import Winter from "./Home/winter";
import CategoryW from "./Home/category-w";
import CategoryS from "./Home/category-s";
import Spring from "./Home/spring";
const MainPage = () => {
    return ( <>
    <Home/>
    <CategoryW/>
    <Winter/>
    <CategoryS/>
    <Spring/>
    </> );
}
 
export default MainPage;