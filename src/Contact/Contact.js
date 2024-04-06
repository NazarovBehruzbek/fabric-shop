import React from "react";
import { Row, Col, Form, Input, message } from 'antd';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import axios from 'axios'
import "./contact.scss"
const { TextArea } = Input;
function Contacts() {
    const coordinate = [41.3383854, 69.2857248];
    const [form] = Form.useForm()
    const onFinish = (values) => {
        const telegram_bot_id = "7127598664:AAEXfRivlYDlHmGpewNnggFY9DWvgfZZ25o";
        const chat_id = 6706091019;
        const url = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
        const method = 'POST';
        const name = values.name;
        const phone = values.phone;
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
            message.success('Muvaffaqiyatli yuborildi')
            form.resetFields();
        }).catch(error => {
            message.error('Yuborishda xatolik')
        });
    };
    return (
        <>
            <div className="contact">
                <div className="container">
                    <Row>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <h2>Contact</h2>
                            <div className="form-contact-c">
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 24 }}
                                    style={{ maxWidth: 1000, marginTop: '50px' }}
                                    initialValues={{ remember: true, }}
                                    autoComplete="off"
                                    layout="vertical"
                                    onFinish={onFinish}
                                    form={form}
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Your Email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="number"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Phone Number!',
                                            },
                                        ]}

                                    >
                                        <Input placeholder="Phone Number" />
                                    </Form.Item>

                                    <Form.Item name="feedback"
                                        rules={[{ required: true, message: 'Please input your fadbeck!' }]}
                                    >
                                        <TextArea rows={8} placeholder="Your Message Here" />
                                    </Form.Item>
                                    <Form.Item
                                        className="send-request-c"
                                    >
                                        <button type="primary" htmlType="submit" className="send-request">
                                            Submit
                                        </button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <YMaps className="c-map">
                                <div className="map-container-c">
                                    <Map
                                        defaultState={{ center: [41.3383854, 69.2857248], zoom: 16 }}
                                        className="map-c"
                                    >
                                        <Placemark geometry={coordinate} options={{ iconColor: '#F35825' }} />
                                    </Map>
                                </div>
                            </YMaps>
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}
export default Contacts;