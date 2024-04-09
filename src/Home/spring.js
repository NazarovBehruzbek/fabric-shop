import React from "react";
import "./winter.scss"
import Data from "../Data/Data"
import useSharedStore from "../Store/store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Spring() {
    const navigate = useNavigate();
    const { setId } = useSharedStore();
    const [t] = useTranslation();
    const handleClick = (id) => {
        setId(id);
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    }
    const selectedLanguage = localStorage.getItem('i18nextLng')
    return (
        <>
            <div className="container">
                <div className="winter">
                    <h2>{t('winter.titles')}</h2>
                    <p>{t('winter.subtitle')}</p>
                </div>
                <div className="wrapper">
                    {
                        Data.slice(5, 10).map((item, index) => {
                            return (
                                <div className="card" key={index} onClick={() => handleClick(item.id)}>
                                    <img src={item.img} alt={item.name} />
                                    <h3>{selectedLanguage === 'eng' ? item.nameEn : item.nameUz}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}