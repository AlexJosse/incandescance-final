import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
import * as S from "./style";

const PoeleBois = () => {

  return (
    <>
    <Header></Header>
        <S.Div>
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
          <Footer></Footer>
        </S.Div>
    </>
  );
};

export default PoeleBois;
