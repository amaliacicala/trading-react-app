
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import "./hero+pricing.css";
import { ModaleLogin } from './ModalPricing';
import { Typography } from 'antd';
const { Title } = Typography;

export function Pricing() {
    return (
        <div>
            <Row>
                <Col span={12}>
                    <div className='pricing-left'>
                        <Title>Only <strong>$67</strong> / month</Title>
                        <ul>
                            <li>Daily options recommendations</li>
                            <li> Suggested strike prices for each symbol</li>
                            <li>8 recommended options strategies</li>
                            <li>Grading system for better options trading</li>
                            <li>Proprietary indicators</li>
                        </ul>
                        <ModaleLogin />
                          
                    </div>
                </Col>
                <Col span={12}>
                    <div className='pricing-right'>
                        <Title> Only <strong>$670</strong> / year</Title>
                        <Title underline level={4}>SAVE $134 ANNUALLY</Title>
                        <ul>
                            <li>Daily options recommendations</li>
                            <li> Suggested strike prices for each symbol</li>
                            <li>8 recommended options strategies</li>
                            <li>Grading system for better options trading</li>
                            <li>Proprietary indicators</li>
                        </ul>
                        <ModaleLogin />
                           
                    </div>
                </Col>
            </Row>

        </div>
    )
}