import React from "react";
import Row from 'react-bootstrap/Row';
import { useMediaQuery } from 'react-responsive';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import KalfireLogo from "../Logo/kalfire";
import FocusLogo from "../Logo/focus";
import KalfirePhoto from "../../assets/logo/kalfire.png";
import FocusPhoto from "../../assets/logo/focus.png";
import * as S from "./style";
import Helmet from "react-helmet";

const CheminéesGaz = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Cheminées Gaz</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Cheminées Gaz"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Cheminées Gaz"
      />
  </Helmet>
    <Header></Header>
        <S.Div>
          {isDesktopOrLaptop && <>
          <Row>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
          <Row>
            <Col><KalfireLogo></KalfireLogo></Col>
          </Row>
          </>}
          {isTabletOrMobile && <> <Row>
            <Col>
              <a href="https://kalfire.com/fr">
                <Image src={KalfirePhoto} fluid />
              </a>
            </Col>
            <Col>
              <a href="https://www.focus-creation.com/">
                <Image src={FocusPhoto} fluid />
              </a>
            </Col>
          </Row>
          </>}

      <Footer></Footer>
        </S.Div>
    </>
  );
};

export default CheminéesGaz;
