import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

const CheminéesBois = () => {

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
          </Row>
      <Footer></Footer>
        </S.Div>
    </>
  );
};

export default CheminéesBois;
