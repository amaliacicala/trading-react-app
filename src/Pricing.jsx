

import 'antd/dist/antd.css';
import "./hero+pricing.css";
import {Typography } from 'antd';
import { ModaleLogin } from './ModalPricing';
import txt from './txt.json';
const { Title } = Typography;


export function Pricing() {
    return (
        <div> {txt.map((item) => {
            return (
                
                    <section className='pricing'>
                        
                            <div className='card-l'>
                                <Title level={2}>
                                {item.pricing.title.only}
                                    <strong> {item.pricing.title.priceSin} </strong>
                                    {item.pricing.title.month}
                                </Title>
                                  <div className='card-l-content'>
                                    <ul>
                                        <li>{item.pricing.l1}</li>
                                        <li>{item.pricing.l2}</li>
                                        <li>{item.pricing.l3}</li>
                                        <li>{item.pricing.l4}</li>
                                        <li>{item.pricing.l5}</li>
                                    </ul>
                                    <ModaleLogin />
                                    </div>
                            </div>
                       
                        
                            <div  className='card-r'>
                                <div className='pricing-title'> 
                                <Title level={2}>
                                    {item.pricing.title.only}
                                    <strong> {item.pricing.title.priceDx} </strong>
                                    {item.pricing.title.year}
                                    </Title>
                                    <Title level={4} underline="true">{item.pricing.subtitle}</Title>
                                </div>
                                <ul>
                                    <li>{item.pricing.l1}</li>
                                    <li>{item.pricing.l2}</li>
                                    <li>{item.pricing.l3}</li>
                                    <li>{item.pricing.l4}</li>
                                    <li>{item.pricing.l5}</li>
                                </ul>
                                <ModaleLogin />
                            </div>
                        
                    </section>
               
            )

        })}</div>
    )
}