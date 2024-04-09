import { Col, Row, Tabs, Rate, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./products.scss";
import Data from "../Data/Data";
import useSharedStore from "../Store/store";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const Products = () => {
    const { id, setId } = useSharedStore();
    const [products, setProducts] = useState([]);
    const { TabPane } = Tabs;
    const [form] = Form.useForm()
    const [t] = useTranslation();
    const navigate = useNavigate()
    const selectedLanguage = localStorage.getItem('i18nextLng')
    const onFinish = (values) => {
        const telegram_bot_id = "7127598664:AAEXfRivlYDlHmGpewNnggFY9DWvgfZZ25o";
        const chat_id = 6706091019;
        const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
        const method = 'POST';
        const name = values.username;
        const phone = values.surname;
        const feedback = values.feedback;
        const messageContent = `Ismi: ${name} \nTelefon raqami: ${phone}  \nTelefon raqami: ${feedback}`;
        axios({
            url: url,
            method: method,
            data: {
                "chat_id": chat_id,
                "text": messageContent
            },
        }).then(res => {
            message.success(t('foter.succes'))
            form.resetFields();
        }).catch(error => {
            message.error(t('foter.error'))
        });
    };
    useEffect(() => {
        const filteredProducts = Data.filter(item => item.id === id);
        setProducts(filteredProducts);
    }, [id]);

    const handleClick = (id) => {
        setId(id);
        navigate(`/product/${id}`);
        window.scrollTo(0, 0);
    }
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const shuffledData = shuffleArray(Data);
    const selectedItems = shuffledData.slice(0, 4);

    return (
        <div className="products">
            <div className="container">
                {products.map((item, index) => (
                    <Row gutter={[16, 16]}>
                        <Col key={index} lg={12} md={24} sm={24} xs={24}>
                            <div className="image-container">
                                <img src={item.img} alt={item.name} />
                            </div>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <div className="category-table">
                                <h2>{selectedLanguage === 'eng' ? item.nameEn : item.nameUz}</h2>
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
                                <p>Category: <a href="/collection">
                                    {
                                        (() => {
                                            switch (true) {
                                                case id <= 5:
                                                    return <span>Winter Collection</span>;
                                                case id >= 5 && id <= 10:
                                                    return <span>Spring Collection</span>;
                                                default:
                                                    return <span>Summer Collection</span>;
                                            }
                                        })()
                                    }
                                </a></p>

                            </div>
                        </Col>
                    </Row>

                ))}

                <Tabs centered={true} defaultActiveKey="1" className="custom-tabs" itemActiveColor="red">
                    <TabPane tab={t('product.title')} key="1">{
                        products.map((item, index) => {
                            return (<div className="description">
                                <h2>{t('product.title')}</h2>
                                <div key={index}>
                                    <h3>{t('product.d-title')} {item.nameEn}</h3>
                                    <p>{t('product.description')}</p>
                                </div>
                            </div>

                            )
                        })
                    }</TabPane>
                    <TabPane tab={t('product.review')} key="2">
                        <div className="review">
                            <h2>{t('product.reviews')}</h2>
                            <p>{t('product.text')}</p>
                            <h2>{t('product.subtitle')}</h2>
                            <p>{t('product.subtext')}</p>
                            <span style={{ fontWeight: 'bold' }}>{t('product.mark')}  *</span>
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
                                    form={form}
                                    onFinish={onFinish}
                                >
                                    <Row>
                                        <Col lg={12} md={24} sm={24} xs={24}>
                                            <Form.Item
                                                label="Name"
                                                name="username"
                                                className="rewiev-in"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!',
                                                    },
                                                ]}

                                            >
                                                <Input style={{ height: '40px', borderColor: 'gray', width: '98%' }} />
                                            </Form.Item>
                                        </Col>
                                        <Col lg={12} md={24} sm={24} xs={24}>
                                            <Form.Item
                                                label="Family"
                                                name="surname"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your Family!',
                                                    },
                                                ]}

                                            >
                                                <Input style={{ height: '40px', borderColor: 'gray', width: '98%' }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Form.Item label="Feedback" name="feedback"
                                        rules={[{ required: true, message: 'Please input your fadbeck!' }]}
                                    >
                                        <TextArea rows={4} style={{ borderColor: 'gray' }} />
                                    </Form.Item>
                                    <Form.Item
                                    >
                                        <button type="primary" htmlType="submit" className="send-request">
                                            {t('foter.send')}
                                        </button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>

                    </TabPane>
                </Tabs>

                <div className="similar">
                    <h2>{t('product.similar')}</h2>
                    <div className="wrapper">
                        {
                            selectedItems.map((item, index) => {
                                return (
                                    <div className="card" key={index} onClick={() => handleClick(item.id)}>
                                        <img src={item.img} alt={item.name} />
                                        <h3>{selectedLanguage === 'eng' ? item.nameEn : item.nameUz}</h3>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
