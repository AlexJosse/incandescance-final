import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';

import Container from 'react-bootstrap/Container';
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
import TonwerkPhoto from "../../assets/logo/tonwerk.jpg";
import ScanPhoto from "../../assets/logo/scan.jpg";
import HarkPhoto from "../../assets/logo/hark.png";
import NestorPhoto from "../../assets/logo/nestor-martin.jpg";
import HetaPhoto from "../../assets/logo/heta.png";
import VyrosaPhoto from "../../assets/logo/vyrosa.png";
import JotulPhoto from "../../assets/logo/jotul.png";
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

      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
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
  <div>
    <Header></Header>
    </div>
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
              <a href="https://www.vyrosa.com/">
                <Image src={VyrosaPhoto} fluid />
              </a>
              &nbsp;
              <a href="https://scan-line.fr/homes/category/2">
                <Image src={HetaPhoto} fluid />
              </a>
              &nbsp;
              <a href="https://www.mcz.it/fr/cheminees-a-bois/">
                <Image src={MczPhoto} fluid />
              </a>
            </Col>
            <Col>
              <a href="http://scan.dk/fr/accueil">
                <Image src={ScanPhoto} fluid />
              </a>
              &nbsp;
              <a href="https://www.jotul.fr/produits/bois/poeles-cheminees">
                <Image src={JotulPhoto} fluid />
              </a>
              &nbsp;
              <a href="https://www.focus-creation.com/">
                <Image src={FocusPhoto} fluid />
              </a>
              &nbsp;
              <a href="https://www.austroflamm.com/fr/">
                <Image src={OstroPhoto} fluid />
              </a>
              &nbsp;
              <a href="https://www.austroflamm.com/fr/">
                <Image src={TonwerkPhoto} fluid />
              </a>
            </Col>
          </Row>
          </>}
          <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br>
          <Footer></Footer>
        </S.Div>
    </Container>
  );
};

export default PoeleBois;
