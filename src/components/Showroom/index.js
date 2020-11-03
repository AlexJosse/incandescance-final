import React  from "react";
import * as S from "./style";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Header from "../Header/index";
import Footer from "../Footer/index";
import Photo1 from "../../assets/showroom/1/1.JPG";
import Photo2 from "../../assets/showroom/2/2.JPG";
import Photo3 from "../../assets/showroom/3/3.JPG";
import Photo4 from "../../assets/showroom/4/4.JPG";
import Photo5 from "../../assets/showroom/etage/1/1.JPG";
import Photo6 from "../../assets/showroom/etage/2/2.JPG";
import Photo7 from "../../assets/showroom/etage/3/3.JPG";
import Photo8 from "../../assets/showroom/etage/4/4.JPG";
import Photo9 from "../../assets/showroom/etage/5/5.JPG";
import Photo10 from "../../assets/showroom/etage/6/6.JPG";
import Photo11 from "../../assets/showroom/etage/7/7.JPG";
import Helmet from "react-helmet";

const Showroom = () => {

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Showroom incandescence</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="showroom incandescence"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="showroom incandescence"
      />
  </Helmet>
  <div>
      <Header></Header>
         <S.TestDiv>
            <Row>
              <Col xs={6} md={4}><Image src={Photo1} fluid></Image></Col>
              <Col xs={6} md={4}><Image src={Photo2} fluid></Image></Col>
              <Col xs={6} md={4}><Image src={Photo11} fluid></Image></Col>
            </Row>
            <Row>
              <Col><Image src={Photo3} fluid></Image></Col>
              <Col><Image src={Photo4} fluid></Image></Col>
            </Row>
            <Row>
              <Col><Image src={Photo5} fluid></Image></Col>
              <Col><Image src={Photo6} fluid></Image></Col>
            </Row>
            <Row>
              <Col><Image src={Photo7} fluid></Image></Col>
              <Col><Image src={Photo8} fluid></Image></Col>
            </Row>
            <Row>
              <Col><Image src={Photo9} fluid></Image></Col>
              <Col><Image src={Photo10} fluid></Image></Col>
            </Row>
            <Footer></Footer>
          </S.TestDiv>
        </div>
        </Container>
  );
};

export default Showroom;
