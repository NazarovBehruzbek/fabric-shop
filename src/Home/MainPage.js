import React from "react";
import Home from './Home';
import Winter from "./winter";
import CategoryW from "./category-w";
import CategoryS from "./category-s";
import Spring from "./spring";
import NewsPage from "../News/News";
import CategoryYoz from "./category-yoz";
import Summer from "./summer";
const MainPage = () => {
    return ( <>
    <Home/>
    <CategoryW/>
    <Winter/>
    <CategoryS/>
    <Spring/>
    <CategoryYoz/>
    <Summer/>
    <NewsPage/>
    </> );
}
 
export default MainPage;