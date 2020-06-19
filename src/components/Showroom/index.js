import React, { useLayoutEffect, useRef, useState } from "react";
import * as S from "./style";
import Container from "../Container/index";
import { useSpring, animated } from "react-spring";
import Typed from "react-typed";
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

const Showroom = () => {

  return (
    <>
      <Header></Header>
         <S.TestDiv>
            <S.Intro><strong>Nous vous accueillerons avec plaisir dans notre magasin où vous pourrez apprécier, sur une surface de xxx m2 un large éventail de réalisations avec de nombreux modèles en situation.</strong></S.Intro>
            <Row>
              <Col xs={6} md={4}><Image src={Photo1} fluid></Image></Col>
              <Col xs={6} md={4}><Image src={Photo2} fluid></Image></Col>
              <Col xs={6} md={4}><Image src={Photo11} fluid></Image></Col>
            </Row>
          </S.TestDiv>
          <S.TestDiv>
            <Row>
              <Col><Image src={Photo3} fluid></Image></Col>
              <Col><Image src={Photo4} fluid></Image></Col>
            </Row>
          </S.TestDiv>
          <S.TestDiv>
            <Row>
              <Col><Image src={Photo5} fluid></Image></Col>
              <Col><Image src={Photo6} fluid></Image></Col>
            </Row>
          </S.TestDiv>
          <S.TestDiv>
            <Row>
              <Col><Image src={Photo7} fluid></Image></Col>
              <Col><Image src={Photo8} fluid></Image></Col>
            </Row>
          </S.TestDiv>
          <S.TestDiv>
            <Row>
              <Col><Image src={Photo9} fluid></Image></Col>
              <Col><Image src={Photo10} fluid></Image></Col>
            </Row>
          </S.TestDiv>
      <Footer></Footer>
    </>
  );
};

export default Showroom;
