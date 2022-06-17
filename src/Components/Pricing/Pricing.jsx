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

                <section key={item.id} className='pricing' id='pricing'>

                    <div className='card-l'>
                        <Title>
                            {item.pricing.title.only}
                            <strong> {item.pricing.title.priceSin} </strong>
                            {item.pricing.title.month}
                        </Title>
                        <div className='card-l-content'>
                            <ul className="fa-ul">
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l1}</li>
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l2}</li>
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l3}</li>
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l4}</li>
                                <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l5}</li>
                            </ul>Name
                            <ModaleLogin />
                        </div>
                    </div>


                    <div className='card-r'>
                        <div className='pricing-title'>
                            <Title>
                                {item.pricing.title.only}
                                <strong> {item.pricing.title.priceDx} </strong>
                                {item.pricing.title.year}
                            </Title>
                            <Title level={4} underline="true" style={{marginTop: '1rem'}}>{item.pricing.subtitle}</Title>
                        </div>
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l1}</li>
                            <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l2}</li>
                            <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l3}</li>
                            <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l4}</li>
                            <li><span className="fa-li"><i className="fa fa-check"></i></span>{item.pricing.l5}</li>
                        </ul>
                        <ModaleLogin />
                    </div>

                </section>

            )

        })}</div>
    )
}