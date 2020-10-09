import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';
import Header from "../Header/index";
import Footer from "../Footer/index";
import MczLogo from "../Logo/mcz";
import MczPhoto from "../../assets/logo/mcz.png";
import * as S from "./style";
import Helmet from "react-helmet";

const PoelePellets = () => {

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

      <Container fluid>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Poëles Pellets</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Poëles Bois"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Poëles Pellets"
      />
  </Helmet>
    <Header></Header>
        <S.Div>
            {isDesktopOrLaptop && <>
            <MczLogo></MczLogo></>}

            {isTabletOrMobile && <> <Row>
                <Col>
                  <a href="https://www.mcz.it/fr/cheminees-a-bois/">
                    <Image src={MczPhoto} fluid />
                  </a>
                  &nbsp;
                </Col>
              </Row>
              </>}
            <Footer></Footer>
        </S.Div>
    </Container>
  );
};

export default PoelePellets;
