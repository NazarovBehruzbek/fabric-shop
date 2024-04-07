import React from "react";
import News from "../Data/News";
import "./news.scss";
import { useNavigate } from 'react-router-dom';
import useSharedStore from "../Store/store";
import { useTranslation } from "react-i18next";

function NewsPage() {
    const navigate = useNavigate();
    const { setnewsId } = useSharedStore();
    const [t] = useTranslation();
    const handleClick = (id) => {
        setnewsId(id);        
        navigate(`/news/${id}`);
        window.scrollTo(0, 0);
    }
    return (
        <div className="news">
            <div className="container">
                <h2>{t('news.title')}</h2>
                <p>{t('news.text')}</p>
                <div className="wrapper-n">
                    {
                        News.map((item, index) => {
                            return (
                                <div className="card-n" key={index} onClick={()=>handleClick(item.id)}>
                                    <img src={item.img} alt={item.name} />
                                    <h3>{t('news.card-title')}</h3>
                                    <p>{t('news.card-text')}</p>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </div>
    )
}
export default NewsPage;