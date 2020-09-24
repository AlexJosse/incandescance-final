import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import HetaLogo from "../Logo/heta";
import FocusLogo from "../Logo/focus";
import * as S from "./style";
import Helmet from "react-helmet";

const PoeleGaz = () => {

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
          <Row>
            <Col><HetaLogo></HetaLogo></Col>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
          <Footer></Footer>
        </S.Div>
    </>
  );
};

export default PoeleGaz;
