import { Col, Row } from 'antd'
import React from 'react'
import "./category.scss"
import image from "../images/winter/yoz.png"

export default function CategoryYoz () {
  return (
    <div className='container'>
        <div className='category category-yoz '>
            <Row>
                <Col lg={5} >
                  <div className='category-info'>
                  <p>100%</p>
                    <span>Material quality</span>
                  </div>
                </Col>
                <Col lg={9}>
                <img className='cat-img' src={image} alt="Error" />
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