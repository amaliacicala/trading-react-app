import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import text from '../../locales/pricing+hero/txt.json';
import "../Pricing/pricing.css";
import "./hero.css";
import { ModaleLogin } from './ModalHero';
import img from '../../assets/hero-section.svg'


export function Hero() {

  return (
    <>{text.map((item) => {
      return (
        <Row key={item.id} className='hero' justify='center'>
          <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }} xl={{ span: 12, order: 1 }} xxl={{ span: 12, order: 1 }} >
            <div className='hero-txt'>
              <h1>
                <strong className='hero-title'>
                  {item.hero.title.title1}
                </strong></h1>
              <p className='hero-sub'>{item.hero.subtitle}</p>
              <div className='hero-l-content'>
                <label><p>{item.hero.label}</p></label>
                <div className='hero-input'><input className='hero-email' type="email" name="email" id="email" placeholder='Email' />
                  <ModaleLogin />
                </div></div>
            </div>
          </Col>
          <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }} xl={{ span: 12, order: 2 }} xxl={{ span: 12, order: 2 }} >
            <img className="hero-img" alt='' src={img} />
          </Col>
        </Row>
      )
    })} </>
  )
}