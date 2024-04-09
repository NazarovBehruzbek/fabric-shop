import React from "react";
import { Row, Col } from 'antd'
import about from "../images/about.png"
import "./about.css"
import { useTranslation } from "react-i18next";

function About() {
    const [t] = useTranslation()
    return (
        <>
            <div className="about-us">
                <div className="container">
                    <h2> {t('about.title')} </h2>
                    <Row>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <img className="about-img" src={about} alt="Error" />
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <p>{t('about.text1')} </p>
                            <p> {t('about.text2')} </p>
                            <p>{t('about.text1')} </p>
                            <p> {t('about.text2')} </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default About;