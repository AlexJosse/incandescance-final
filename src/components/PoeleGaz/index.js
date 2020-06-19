import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import HetaLogo from "../Logo/heta";
import FocusLogo from "../Logo/focus";
import * as S from "./style";

const PoeleGaz = () => {

  return (
    <>
    <Header></Header>
        <S.Div>
          <Row>
            <Col><HetaLogo></HetaLogo></Col>
            <Col><FocusLogo></FocusLogo></Col>
          </Row>
        </S.Div>
    <Footer></Footer>
    </>
  );
};

export default PoeleGaz;
