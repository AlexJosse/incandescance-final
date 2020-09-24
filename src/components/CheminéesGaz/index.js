import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import KalfireLogo from "../Logo/kalfire";
import FocusLogo from "../Logo/focus";
import * as S from "./style";
import Helmet from "react-helmet";

const CheminéesGaz = () => {

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
          <Row>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
          <Row>
            <Col><KalfireLogo></KalfireLogo></Col>
          </Row>
      <Footer></Footer>
        </S.Div>
    </>
  );
};

export default CheminéesGaz;
