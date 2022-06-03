import React from 'react';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import '../src/footer.css';
import { Row, Col } from 'antd';
import { Form, Input, Button } from 'antd';


export default function Footer() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    
    
    return (
        <footer>
            <section className="footer-grid">
            <Row 
                align="top" 
                justify="center" 
                style={{backgroundColor:'#002329', color:'white'}}
            >
                <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <section>
                        <h2 style={{color:'white'}}>Logo</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.
                        </p>
                    </section>
                    <section className="social-container">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                    </section>
                </Col>

                <Col xs={8} sm={8} md={3} lg={3} xl={3}>
                    <h3>Product</h3>
                    <ul style={{listStyle:'none', display:'flex', flexFlow:'column wrap', padding:'0'}}>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Interest</a></li>
                    </ul>
                </Col>

                <Col xs={8} sm={8} md={3} lg={3} xl={3}>
                    <h3>Markets</h3>
                    <ul style={{listStyle:'none', display:'flex', flexFlow:'column wrap', padding:'0'}}>
                        <li><a href="#">Futures</a></li>
                        <li><a href="#">Indices</a></li>
                        <li><a href="#">Shares</a></li>
                        <li><a href="#">Metals</a></li>
                    </ul>
                </Col>

                <Col xs={8} sm={8} md={3} lg={3} xl={3}>
                    <h3>Resources</h3>
                    <ul style={{listStyle:'none', display:'flex', flexFlow:'column wrap', padding:'0'}}>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Disclaimer</a></li>
                    </ul>
                </Col>

                <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                    <h3>Subscribe to our newsletter</h3>
                    <Form
                        name="basic"
                        layout="inline"
                        wrapperCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >

                        <Form.Item
                            name="email"
                            type="email"
                            rules={[
                            {
                                required: true,
                                message: 'Please insert your email',
                            },
                            ]}
                        >
                            <Input placeholder="Your Email..."/>
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                            offset: 0,
                            span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                <i className="fa fa-paper-plane"></i>
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            </section>

            <section className="footer-disclaimer">
            <Row 
                align="top" 
                justify="center" 
                style={{backgroundColor:'#002329', color:'white'}}
            >
                <Col span={24}>
                    <p>
                    Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. Information is for general educational and research purposes and should not be construed as individual investment advice.
                    </p>
                </Col>
            </Row>
            </section>

            <section className="footer-copyright">
            <Row 
                align="top" 
                justify="center" 
                style={{backgroundColor:'#002329', color:'white'}}
            >
                <Col span={24}>
                    <p>
                    Trading App &copy; 2022 Full Stack 2 Team 4
                    </p>
                </Col>
            </Row>
            </section>
        </footer>
    )
}