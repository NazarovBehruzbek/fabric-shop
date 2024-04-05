import { Col, Row } from 'antd'
import React from 'react'
import "./category.scss"
import image from "../images/winter/winter4.jpg"

export default function CategoryW() {
  return (
    <div className='container'>
        <div className='category'>
            <Row>
                <Col lg={6}>
                  <div className='category-info'>
                  <p>100%</p>
                    <span>Material quality</span>
                  </div>
                </Col>
                <Col lg={8}>
                <img src={image} alt="Error" />
                </Col>
                <Col lg={10}>
                   <div className='category-info2'>
                   <h2>'Tashkent Natural product'</h2>
                    <p> has been a company that produces cotton fabrics for use all over the world for many years</p>
                    <button>Collection</button>
                   </div>
                </Col>
            </Row>
   
        </div>
    </div>
  )
}
