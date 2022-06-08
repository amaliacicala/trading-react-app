
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "./hero+pricing.css";
import { ModaleLogin } from './ModalPricing';
import { useEffect } from 'react';
import list from './txt.json';
import { Typography } from 'antd';
const { Title } = Typography;

export function Pricing() {
    return (
        <div> {list.map((item) => {
            return(
            <Row className="price-section">
                <Col xs={24} sm={24} md={12} lg={12}>
                    <div className='pricing-left'>
                        <Title>Only <strong>$67</strong> / month</Title>
                        <ul>
                            <li>{item.l1}</li>
                            <li>{item.l2}</li>
                            <li>{item.l3}</li>
                            <li>{item.l4}</li>
                            <li>{item.l5}</li>
                            {console.log(item.l1)}
                        </ul>
                        <ModaleLogin />

                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <div className='pricing-right'>
                       <div> <Title> Only <strong>$670</strong> / year</Title>
                        <Title className='price-subtitle' underline level={4}>SAVE $134 ANNUALLY</Title></div>
                        <ul>
                            <li>{item.l1}</li>
                            <li>{item.l2}</li>
                            <li>{item.l3}</li>
                            <li>{item.l4}</li>
                            <li>{item.l5}</li>
                        </ul>
                        <ModaleLogin />

                    </div>
                </Col>
            </Row>
            )

        })}</div>
    )
}