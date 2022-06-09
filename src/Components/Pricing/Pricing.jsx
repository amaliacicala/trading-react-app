import 'antd/dist/antd.css';
import "./pricing.css";
import '../Hero/hero.css';
import 'font-awesome/css/font-awesome.min.css';
import { Typography } from 'antd';
import { ModaleLogin } from './ModalPricing';
import txt from '../../locales/pricing+hero/txt.json';
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
                            <ul class="fa-ul">
                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l1}</li>
                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l2}</li>
                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l3}</li>
                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l4}</li>
                                <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l5}</li>
                            </ul>
                            <ModaleLogin />
                        </div>
                    </div>


                    <div className='card-r'>
                        <div className='pricing-title'>
                            <Title level={2}>
                                {item.pricing.title.only}
                                <strong> {item.pricing.title.priceDx} </strong>
                                {item.pricing.title.year}
                            </Title>
                            <Title level={4} underline="true">{item.pricing.subtitle}</Title>
                        </div>
                        <ul class="fa-ul">
                            <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l1}</li>
                            <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l2}</li>
                            <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l3}</li>
                            <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l4}</li>
                            <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.pricing.l5}</li>
                        </ul>
                        <ModaleLogin />
                    </div>

                </section>

            )

        })}</div>
    )
}