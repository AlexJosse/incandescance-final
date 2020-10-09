import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useMediaQuery } from 'react-responsive';
import Header from "../Header/index";
import Footer from "../Footer/index";
import HetaLogo from "../Logo/heta";
import FocusLogo from "../Logo/focus";


import FocusPhoto from "../../assets/logo/focus.png";
import HetaPhoto from "../../assets/logo/heta.png";
import * as S from "./style";
import Helmet from "react-helmet";

const PoeleGaz = () => {

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
      <title>Poëles Gaz</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Poëles Bois"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Poëles Gaz"
      />
  </Helmet>
    <Header></Header>
        <S.Div>
          {isDesktopOrLaptop && <>
          <Row>
            <Col><HetaLogo></HetaLogo></Col>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
          </>}
          {isTabletOrMobile && <>
            <Row>
                <Col>
                  <a href="https://scan-line.fr/homes/category/2">
                    <Image src={HetaPhoto} fluid />
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

export default PoeleGaz;
