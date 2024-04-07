import { Col, Row } from 'antd'
import React from 'react'
import "./category.scss"
import image from "../images/winter/kuz.png"
import { useTranslation } from 'react-i18next'

export default function CategoryS() {
  const [t] = useTranslation();
  return (
    <div className='container'>
        <div className='category category-s'>
            <Row>
                <Col lg={5}>
                  <div className='category-info'>
                  <p>100%</p>
                    <span>{t('category.title1')}</span>
                  </div>
                </Col>
                <Col lg={9}>
                <img className='cat-img' src={image} alt="Error" />
                </Col>
                <Col lg={10}>
                   <div className='category-info2'>
                   <h2>{t('category.title2')}</h2>
                    <p> {t('category.text')}</p>
                    <button>{t('home.btn')}</button>
                   </div>
                </Col>
            </Row>
   
        </div>
    </div>
  )
}
