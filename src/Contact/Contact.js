import React from "react";
import { Row, Col,Form,Input } from 'antd';
import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import "./contact.scss"
const { TextArea } = Input;
function Contacts() {
    const coordinate = [41.3383854, 69.2857248];
    return(
        <>
        <div className="contact">
            <div className="container">
                <Row>
                    <Col lg={12} md={24}>
                        <h2>Contact</h2>
                        <div className="form-contact">
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 22 }}
                                    style={{ maxWidth: 1000, marginTop: '50px' }}
                                    initialValues={{ remember: true, }}
                                    autoComplete="off"
                                    layout="vertical"
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
                                        name="phonenumber"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Family!',
                                            },
                                        ]}
                                       
                                    >
                                        <Input  placeholder="Phone Number"/>
                                    </Form.Item>
                                    
                                    <Form.Item   name="Feedback"
                                      rules={[{ required: true, message: 'Please input your fadbeck!' }]}
                                    >
                                        <TextArea rows={8} placeholder="Your Message Here"/>
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            offset: 15,
                                            span: 10,
                                        }}

                                    >
                                        <button type="primary" htmlType="submit" className="send-request">
                                            Submit
                                        </button>
                                    </Form.Item>
                                </Form>
                            </div>
                    </Col>
                    <Col lg={12} md={24}>
                    <YMaps>
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