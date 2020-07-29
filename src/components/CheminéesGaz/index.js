import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import KalfireLogo from "../Logo/kalfire";
import FocusLogo from "../Logo/focus";
import * as S from "./style";

const CheminéesGaz = () => {

  return (
    <>
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
