import React from "react";
import News from "../Data/News";
import "./news.scss";
import { useNavigate } from 'react-router-dom';
import useSharedStore from "../Store/store";

function NewsPage() {
    const navigate = useNavigate();
    const { newsId, setnewsId } = useSharedStore();
    const handleClick = (id) => {
        setnewsId(id);        
        navigate(`/news/${id}`);
        window.scrollTo(0, 0);
    }
    return (
        <div className="news">
            <div className="container">
                <h2>News</h2>
                <p>Tashkent Natural Product</p>
                <div className="wrapper-n">
                    {
                        News.map((item, index) => {
                            return (
                                <div className="card-n" key={index} onClick={()=>handleClick(item.id)}>
                                    <img src={item.img} alt={item.name} />
                                    <h3>How to choose perfect gadgets</h3>
                                    <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s...</p>
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