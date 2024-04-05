import { Col, Row, Tabs, Rate, Form, Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import "./products.scss";
import Data from "../Data/Data";
import useSharedStore from "../Store/store";
const { TextArea } = Input;
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
                                <img src={item.img} alt={item.name} />
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
                        products.map((item, index) => {
                            return (<div className="description">
                                <h2>Description</h2>
                                <div key={index}>
                                    <h3>{item.nameEn}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>

                            )
                        })
                    }</TabPane>
                    <TabPane tab="Reviews (0)" key="2">
                        <div className="review">
                            <h2>Reviews</h2>
                            <p>There are no reviews yet.</p>
                            <h2>Be the first to review “Luxury”</h2>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <span style={{ fontWeight: 'bold' }}>Your mark  *</span>
                            <span>  <Rate className="rate-item" style={{ borderColor: 'red' }} /></span>
                            <div className="form">
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 24 }}
                                    style={{ maxWidth: 1000, marginTop: '50px' }}
                                    initialValues={{ remember: true, }}
                                    autoComplete="off"
                                    layout="vertical"
                                >
                                    <Form.Item
                                        label="Name"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                        style={{ display: 'inline-block', width: 'calc(50% - 15px)', marginRight: "30px" }}
                                    >
                                        <Input style={{ height: '40px', borderColor: 'gray' }} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Family"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Family!',
                                            },
                                        ]}
                                        style={{ display: 'inline-block', width: 'calc(50% - 15px)' }}
                                    >
                                        <Input style={{ height: '40px', borderColor: 'gray' }} />
                                    </Form.Item>
                                    
                                    <Form.Item label="Feedback"  name="Feedback"
                                      rules={[{ required: true, message: 'Please input your fadbeck!' }]}
                                    >
                                        <TextArea rows={4} style={{ borderColor: 'gray' }} />
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            offset: 19,
                                            span: 16,
                                        }}

                                    >
                                        <button type="primary" htmlType="submit" className="send-request">
                                            Submit
                                        </button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>

                    </TabPane>
                </Tabs>

                <div className="similar">
                    <h2>Similar products</h2>
                    <div className="wrapper">
                        {
                            Data.slice(0, 4).map((item, index) => {
                                return (
                                    <div className="card" key={index} >
                                        <img src={item.img} alt={item.name} />
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
