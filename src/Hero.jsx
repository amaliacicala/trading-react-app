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
        <Col span={10}>
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
        <Col span={14}> <Image alt='IMMAGINE'
          width={200}
          src=""
        /></Col>
      </Row>
      )
    })} </>
  )
}