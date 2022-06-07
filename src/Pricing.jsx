
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
            <Row>
                <Col span={12}>
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
                <Col span={12}>
                    <div className='pricing-right'>
                        <Title> Only <strong>$670</strong> / year</Title>
                        <Title underline level={4}>SAVE $134 ANNUALLY</Title>
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