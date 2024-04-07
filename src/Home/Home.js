import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./home.scss"
// import required modules
import { Pagination } from 'swiper/modules';
import { Col, Row } from "antd";
import avto from "../images/avto.svg"
import retur from "../images/retuen.svg"
import naush from "../images/naushnik.svg"
import payment from "../images/payment.svg"
import { useNavigate } from "react-router-dom"
function Home() {
    const navigate = useNavigate();
    const  onClickN = () =>{
        navigate('/collection');
    }
    return (
        <>
            <div className="home container">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider-item1">
                            <div className="slider-caption">
                                <h1>Fashion Fabrics - 50% Off Stretch, Faux Fur & More</h1>
                                <button onClick={onClickN} className="slider-btn">SHOP NOW</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item2">
                        <div className="slider-caption">
                                <h1>Fashion Fabrics - 50% Off Stretch, Faux Fur & More</h1>
                                <button onClick={onClickN}  className="slider-btn">SHOP NOW</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item3">
                        <div className="slider-caption">
                                <h1>Fashion Fabrics - 50% Off Stretch, Faux Fur & More</h1>
                                <button onClick={onClickN}  className="slider-btn">SHOP NOW</button>
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
                                <h3>Free shipping</h3>
                                <p>Free shipping on all orders</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={8} sm={12} xs={24}>
                        <div className="anons-item">
                                <img src={retur} alt="Error" />
                                <div className="info">
                                <h3>Free shipping</h3>
                                <p>Free shipping on all orders</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={8} sm={12} xs={24}>
                        <div className="anons-item">
                                <img src={naush} alt="Error" />
                                <div className="info">
                                <h3>Free shipping</h3>
                                <p>Free shipping on all orders</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={8} sm={12} xs={24}>
                        <div className="anons-item">
                                <img src={payment} alt="Error" />
                                <div className="info">
                                <h3>Free shipping</h3>
                                <p>Free shipping on all orders</p>
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