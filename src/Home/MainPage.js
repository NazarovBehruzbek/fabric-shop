import React from "react";
import Home from './Home';
import Winter from "./winter";
import CategoryW from "./category-w";
import CategoryS from "./category-s";
import Spring from "./spring";
import NewsPage from "../News/News";
import CategoryYoz from "./category-yoz";
import Summer from "./summer";
import { useNavigate } from "react-router-dom"
const MainPage = () => {
    const navigate = useNavigate()
    const onClickN = () => {
        navigate('/collection');
        window.scrollTo(0, 0);
    }
    return (<>
        <Home onClickN={onClickN} />
        <CategoryW onClickN={onClickN} />
        <Winter />
        <CategoryS onClickN={onClickN} />
        <Spring />
        <CategoryYoz onClickN={onClickN} />
        <Summer />
        <NewsPage />
    </>);
}

export default MainPage;