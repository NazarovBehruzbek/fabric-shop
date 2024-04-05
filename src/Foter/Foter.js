import React from 'react';
import "./foter.scss"
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function Foter() {
    const coordinate = [41.3383854, 69.2857248];
    const { t } = useTranslation()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []); 
    
    return (
        <section>
            <div className="foter" id="connect">
                <div className="container">

                    {windowWidth >= 330 && windowWidth <= 992 ? (
                        <Row>
                            <Col lg={12} md={24} xs={24} sm={24}>

                                <YMaps>
                                    <div className="map-container">
                                        <Map
                                            defaultState={{ center: [41.3383854, 69.2857248], zoom: 16 }}
                                            className="map"
                                        >
                                            <Placemark geometry={coordinate} options={{ iconColor: '#F35825' }} />
                                        </Map>
                                    </div>
                                </YMaps>
                            </Col>
                            <Col lg={12} md={24} xs={24} sm={24}>
                                <div className="info">
                                    <h2 className="foter-title">{t('foter.title')}</h2>
                                    <div className="foter-glob">
                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div className="foter-info">
                                                <h2>{t('foter.addressT')}</h2>
                                                <p>{t('foter.address')}</p>
                                            </div>
                                        </div>

                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faPhoneVolume} />
                                            </div>
                                            <div className="foter-info">
                                                <h2>{t('foter.phone')}</h2>
                                                <p>+998908666051</p>
                                            </div>
                                        </div>

                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faClock} />
                                            </div>
                                            <div className="foter-info">
                                                <h2>{t('foter.work')}</h2>
                                                <p>09:00 - 18:00 Mon-Fri</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="social-network">
                                        <a href="https://t.me/Bexruzbek_Nazarov" target="_blank" rel="noopener">
                                            <div><FontAwesomeIcon icon={faFacebookF} /></div>
                                        </a>
                                        <a href="https://www.instagram.com/nazarov_behruzbek" target="_blank" rel="noopener">
                                            <div><FontAwesomeIcon icon={faInstagram} /></div>
                                        </a>
                                        <a href="https://t.me/Bexruzbek_Nazarov" target="_blank" rel="noopener">
                                            <div><FontAwesomeIcon icon={faTelegram} /></div>
                                        </a>
                                    </div>

                                    <div className="foter-form">
                                        <form  id="myForm">
                                            <div className="foter-items">
                                                <div className="form-item">
                                                    <p>{t('foter.formName')}</p>
                                                    <input
                                                        id="nameInput"
                                                        type="text"
                                                        required
                                                        name="name"
                                                        placeholder={t('foter.formName')}
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <p>{t('foter.pnumber')}</p>
                                                    <input
                                                        id="phoneInput"
                                                        type="tel"
                                                        required
                                                        pattern="[0-9]{10}"
                                                        placeholder="998908666051"
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <button type="submit">{t('foter.send')}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    ) : (
                        <Row>
                            <Col lg={12} md={24} xs={24} sm={24}>
                                <div className="info">
                                    <h2 className="foter-title">{t('foter.title')}</h2>
                                    <div className="foter-glob">
                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faLocationDot} />
                                            </div>
                                            <div className="foter-info">
                                                <h2>{t('foter.addressT')}</h2>
                                                <p>{t('foter.address')}</p>
                                            </div>
                                        </div>

                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faPhoneVolume} />
                                            </div>
                                            <div className="foter-info">
                                                <h2>{t('foter.phone')}</h2>
                                                <p>+998908666051</p>
                                            </div>
                                        </div>

                                        <div className="foter-adres">
                                            <div className="foter-icon">
                                                <FontAwesomeIcon icon={faClock} />
                                            </div>
                                            <div className="foter-info">
                                                <h2>{t('foter.work')}</h2>
                                                <p>09:00 - 18:00 Mon-Fri</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="social-network">
                                        <a href="https://t.me/Bexruzbek_Nazarov" target="_blank" rel="noopener">
                                            <div><FontAwesomeIcon icon={faFacebookF} /></div>
                                        </a>
                                        <a href="https://www.instagram.com/nazarov_behruzbek" target="_blank" rel="noopener">
                                            <div><FontAwesomeIcon icon={faInstagram} /></div>
                                        </a>
                                        <a href="https://t.me/Bexruzbek_Nazarov" target="_blank" rel="noopener">
                                            <div><FontAwesomeIcon icon={faTelegram} /></div>
                                        </a>
                                    </div>

                                    <div className="foter-form">
                                        <form  id="myForm">
                                            <div className="foter-items">
                                                <div className="form-item">
                                                    <p>{t('foter.formName')}</p>
                                                    <input
                                                        id="nameInput"
                                                        type="text"
                                                        required
                                                        name="name"
                                                        placeholder={t('foter.formName')}
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <p>{t('foter.pnumber')}</p>
                                                    <input
                                                        id="phoneInput"
                                                        type="text"
                                                        required
                                                        placeholder="+998908666051"
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <button type="submit">{t('foter.send')}</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={24} xs={24} sm={24}>

                                <YMaps>
                                    <div className="map-container">
                                        <Map
                                            defaultState={{ center: [41.3383854, 69.2857248], zoom: 16 }}
                                            className="map"
                                        >
                                            <Placemark geometry={coordinate} options={{ iconColor: '#F35825' }} />
                                        </Map>
                                    </div>
                                </YMaps>
                            </Col>
                        </Row>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Foter;