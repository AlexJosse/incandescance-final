import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import MczLogo from "../Logo/mcz";
import * as S from "./style";

const PoelePellets = () => {

  return (
    <>
    <Header></Header>
        <S.Div>
            <MczLogo></MczLogo>
            <Footer></Footer>
        </S.Div>
    </>
  );
};

export default PoelePellets;
