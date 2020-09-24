import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import MczLogo from "../Logo/mcz";
import * as S from "./style";
import Helmet from "react-helmet";

const PoelePellets = () => {

  return (
    <>
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
            <MczLogo></MczLogo>
            <Footer></Footer>
        </S.Div>
    </>
  );
};

export default PoelePellets;
