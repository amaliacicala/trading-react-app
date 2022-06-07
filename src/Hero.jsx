import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import "./hero+pricing.css";
import {ModaleLogin, ModaleSignUp} from './ModalHero';


export function Hero() {
  return (
    <>
      <Row justify='center' align='middle'>
        <Col span={10}>
          <div className='hero'>
            <h1>
              <strong>
                THE ONLY DONE <br /> FOR YOU OPTION <br /> PICKER</strong></h1>
            <strong>Get trade alerts. Cancel anytime.</strong>
            <label><strong>Enter your email to create or restart your membership</strong></label>
            <div className='hero-input'><input type="email" name="email" id="email" placeholder='Email' />
            <ModaleLogin />
              <ModaleSignUp/></div>
          </div>
        </Col>
        <Col span={14}> <Image alt='IMMAGINE'
          width={200}
          src=""
        /></Col>
      </Row>

    </>
  )
}