import React, { useEffect, useState } from "react";
import "./Newscategory.scss";
import News from "../Data/News";
import useSharedStore from "../Store/store";
import { useTranslation } from "react-i18next";

function NewsCategory() {
    const { newsId } = useSharedStore();
    const [newsproduct, setnewsproduct] = useState([])
    const [t] = useTranslation();
    useEffect(() => {
        const filteredProducts = News.filter(item => item.id === newsId);
        setnewsproduct(filteredProducts);
    }, [newsId]);
    return (
        <div className="news-c">
            <div className="container">
                {
                    newsproduct.map((item, index) => (
                        <img className="news-img" src={item.img} alt="Error" />
                    ))
                }
                <div className="info-news">
                    <p>{t('newsC.text1')}</p>
                    <p>{t('newsC.text2')}</p>
                    <p>{t('newsC.text3')}</p>
                    <p>{t('newsC.text4')}</p>
                </div>

            </div>
        </div>
    )
}
export default NewsCategory;