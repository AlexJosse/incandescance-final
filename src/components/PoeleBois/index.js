import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';
import Header from "../Header/index";
import Footer from "../Footer/index";
import VyrosaLogo from "../Logo/vyrosa";
import HetaLogo from "../Logo/heta";
import JotulLogo from "../Logo/jotul";
import NestorLogo from "../Logo/nestor";
import HarkLogo from "../Logo/hark";
import ScanLogo from "../Logo/scan";
import MczLogo from "../Logo/mcz";
import ChazelleLogo from "../Logo/chazelle";
import FocusLogo from "../Logo/focus";
import OstroLogo from "../Logo/ostro";
import TonwerkLogo from "../Logo/tonwerk";

import ChazellePhoto from "../../assets/logo/chazelle.png";
import MczPhoto from "../../assets/logo/mcz.png";
import FocusPhoto from "../../assets/logo/focus.png";
import OstroPhoto from "../../assets/logo/ostro.png";

import * as S from "./style";
import Helmet from "react-helmet";

const PoeleBois = () => {
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
      <title>Poëles Bois</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Poëles Bois"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Poëles Bois"
      />
  </Helmet>
    <Header></Header>
        <S.Div>
          {isDesktopOrLaptop && <>
          <Row>
            <Col><VyrosaLogo></VyrosaLogo></Col>
            <Col><HetaLogo></HetaLogo></Col>
          </Row>
          <Row>
            <Col><JotulLogo></JotulLogo></Col>
            <Col><NestorLogo></NestorLogo></Col>
          </Row>
          <Row>
            <Col><HarkLogo></HarkLogo></Col>
            <Col><ScanLogo></ScanLogo></Col>
          </Row>
          <Row>
            <Col><ChazelleLogo></ChazelleLogo></Col>
            <Col><OstroLogo></OstroLogo></Col>
          </Row>
          <Row>
            <Col><MczLogo></MczLogo></Col>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
          <Row>
            <Col><TonwerkLogo></TonwerkLogo></Col>
          </Row>
          </>}
          {isTabletOrMobile && <> <Row>
            <Col>
              <a href="https://www.chazelles.com/">
                <Image src={ChazellePhoto} fluid />
              </a>
              &nbsp;
              <a href="https://www.mcz.it/fr/cheminees-a-bois/">
                <Image src={MczPhoto} fluid />
              </a>
            </Col>
            <Col>
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
          </>}
          <Footer></Footer>
        </S.Div>
    </>
  );
};

export default PoeleBois;
