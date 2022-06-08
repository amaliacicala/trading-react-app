import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import text from './txt.json';
import "./hero+pricing.css";
import { ModaleLogin } from './ModalHero';


export function Hero() {
  
  return (
    <>{text.map((item) => {
      return(
      <Row justify='center' align='middle'>
        <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} md={{span: 24, order: 2}} lg={{span: 10, order: 1} } xl={{span: 10, order: 1} } xxl={{span: 10, order: 1} } >
          <div className='hero'>
            <h1>
              <strong>{item.title.title1}</strong>
              <strong> {item.title.title2} </strong>
              <strong> {item.title.title3}</strong></h1>
            <strong>{item.subtitle}</strong>
            <label><strong>Enter your email to create or restart your membership</strong></label>
            <div className='hero-input'><input type="email" name="email" id="email" placeholder='Email' />
              <ModaleLogin />
            </div>
          </div>
        </Col>
        <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} md={{span: 24, order: 1}} lg={{span: 14, order: 2}} xl={{span: 14, order: 2}} xxl={{span: 14, order: 2}} > <Image alt='IMMAGINE'
          width={200}
          src=""
        /></Col>
      </Row>
      )
    })} </>
  )
}