import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import text from './txt.json';
import "./pricing.css";
import "./hero.css";
import { ModaleLogin } from './ModalHero';


export function Hero() {

  return (
    <>{text.map((item) => {
      return (
        <Row className='hero' justify='center'>
          <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 1 }} xl={{ span: 12, order: 1 }} xxl={{ span: 12, order: 1 }} >
            <div className='hero-txt'>
              <h1>
                <strong>
                  {item.hero.title.title1} <br />
                  {item.hero.title.title2} <br />
                  {item.hero.title.title3} <br />
                  </strong></h1>
              <strong className='hero-sub'>{item.hero.subtitle} <br /></strong>
              <div><label><strong>{item.hero.label}</strong></label>
              <div className='hero-input'><input className='hero-email' type="email" name="email" id="email" placeholder='Email' />
                <ModaleLogin />
              </div></div>
            </div>
          </Col>
          <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 12, order: 2 }} xl={{ span: 12, order: 2 }} xxl={{ span: 12, order: 2 }} > <Image alt='IMMAGINE'
            width={200}
            src=""
          /></Col>
        </Row>
      )
    })} </>
  )
}