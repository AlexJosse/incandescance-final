import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';
import Header from "../Header/index";
import Footer from "../Footer/index";
import ChazelleLogo from "../Logo/chazelle";
import MczLogo from "../Logo/mcz";
import OstroLogo from "../Logo/ostro";
import FocusLogo from "../Logo/focus";
import KalfireLogo from "../Logo/kalfire";
import KempLogo from "../Logo/kemp";
import * as S from "./style";
import Helmet from "react-helmet";
import ChazellePhoto from "../../assets/logo/chazelle.png";
import KalfirePhoto from "../../assets/logo/kalfire.png";
import MczPhoto from "../../assets/logo/mcz.png";
import KempPhoto from "../../assets/logo/kemp.png";
import FocusPhoto from "../../assets/logo/focus.png";
import OstroPhoto from "../../assets/logo/ostro.png";

const CheminéesBois = () => {
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
      <title>Cheminées Bois</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Cheminées"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Cheminées Bois"
      />
  </Helmet>
    <Header></Header>
        <S.Div>
          {isDesktopOrLaptop && <>
          <Row>
            <Col><ChazelleLogo></ChazelleLogo></Col>
            <Col><MczLogo></MczLogo></Col>
          </Row>
          <Row>
            <Col><OstroLogo></OstroLogo></Col>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
          <Row>
            <Col><KalfireLogo></KalfireLogo></Col>
            <Col><KempLogo></KempLogo></Col>
          </Row></>
        }
        <Row>
          <Col>
            <a href="https://www.chazelles.com/">
              <Image src={ChazellePhoto} fluid />
            </a>
            &nbsp;
            <a href="https://www.mcz.it/fr/cheminees-a-bois/">
              <Image src={MczPhoto} fluid />
            </a>
            &nbsp;
            <a href="https://kalfire.com/fr">
              <Image src={KempPhoto} fluid />
            </a>
          </Col>
          <Col>
            <a href="https://kalfire.com/fr">
              <Image src={KalfirePhoto} fluid />
            </a>
            &nbsp;
            <a href="https://www.focus-creation.com/">
              <Image src={FocusPhoto} fluid />
            </a>
            &nbsp;
            &nbsp;
            <a href="https://www.austroflamm.com/fr/">
              <Image src={OstroPhoto} fluid />
            </a>
          </Col>
        </Row>
      <Footer></Footer>
        </S.Div>
    </>
  );
};

export default CheminéesBois;
