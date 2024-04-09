import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./home.scss"
import { Pagination } from 'swiper/modules';
import { Col, Row } from "antd";
import avto from "../images/avto.svg"
import retur from "../images/retuen.svg"
import naush from "../images/naushnik.svg"
import payment from "../images/payment.svg"
import { useTranslation } from "react-i18next";

function Home({ onClickN }) {
    const [t] = useTranslation()
    return (
        <>
            <div className="home container">
                <Swiper
                    // ref={swiperRef}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider-item1">
                            <div className="slider-caption">
                                <h1>{t('home.title')}</h1>
                                <button onClick={onClickN} className="slider-btn">{t('home.btn')}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item2">
                            <div className="slider-caption">
                                <h1>{t('home.title')}</h1>
                                <button onClick={onClickN} className="slider-btn">{t('home.btn')}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item3">
                            <div className="slider-caption">
                                <h1>{t('home.title')}</h1>
                                <button onClick={onClickN} className="slider-btn">{t('home.btn')}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="anons">
                <div className="container">
                    <Row>
                        <Col lg={6} md={8} sm={12} xs={24}>
                            <div className="anons-item">
                                <img src={avto} alt="Error" />
                                <div className="info">
                                    <h3>{t('home.card1.title')}</h3>
                                    <p>{t('home.card1.text')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={8} sm={12} xs={24}>
                            <div className="anons-item">
                                <img src={retur} alt="Error" />
                                <div className="info">
                                    <h3>{t('home.card2.title')}</h3>
                                    <p>{t('home.card2.text')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={8} sm={12} xs={24}>
                            <div className="anons-item">
                                <img src={naush} alt="Error" />
                                <div className="info">
                                    <h3>{t('home.card3.title')}</h3>
                                    <p>{t('home.card3.text')}</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={8} sm={12} xs={24}>
                            <div className="anons-item">
                                <img src={payment} alt="Error" />
                                <div className="info">
                                    <h3>{t('home.card4.title')}</h3>
                                    <p>{t('home.card4.text')}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Home;
