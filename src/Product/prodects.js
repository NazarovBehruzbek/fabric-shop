import { Col, Row, Tabs, Tab } from "antd";
import React, { useEffect, useState } from "react";
import "./products.scss";
import Data from "../Data/Data";
import useSharedStore from "../Store/store";

const Products = () => {
    const { id } = useSharedStore();
    const [products, setProducts] = useState([]);
    const { TabPane } = Tabs;

    useEffect(() => {
        const filteredProducts = Data.filter(item => item.id === id);
        setProducts(filteredProducts);
    }, [id]);

    return (
        <div className="products">
            <div className="container">
                {products.map((item, index) => (
                    <Row gutter={[16, 16]}>
                        <Col key={index} lg={12} md={24}>
                           <div className="image-container">
                             <img src={item.img} alt={item.name}/>
                           </div>
                        </Col>
                        <Col lg={12} md={24}>
                            <div className="category-table">
                                <h2>{item.nameEn}</h2>
                                <table>
                                    <tr>
                                        <th>Material:</th>
                                        <td>100% cotton flannel</td>
                                    </tr>
                                    <tr>
                                        <th>Pillowcase:</th>
                                        <td>50x70 cm (2 pcs.)</td>
                                    </tr>
                                    <tr>
                                        <th>Bed sheet:</th>
                                        <td>260×280 cm (1 piece)</td>
                                    </tr>
                                    <tr>
                                        <th>Duvet cover:</th>
                                        <td>160x220 cm (2 pcs.)</td>
                                    </tr>
                                    <tr>
                                        <th>Size:</th>
                                        <td>Special size</td>
                                    </tr>
                                    <tr>
                                        <th>Manufacturer:</th>
                                        <td>Tashkent Naturak Product</td>
                                    </tr>
                                </table>
                                <p>Category: <span><a href="/">Winter collecction</a></span></p>
                            </div>
                        </Col>
                    </Row>

                ))}

                <Tabs centered={true} defaultActiveKey="1" className="custom-tabs" itemActiveColor="red">
                    <TabPane tab="Description" key="1">{
                        products.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <h3>{item.nameEn}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }</TabPane>
                    <TabPane tab="Reviews (0)" key="2">Tab 2 Content</TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default Products;
