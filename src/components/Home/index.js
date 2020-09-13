import React, { useLayoutEffect, useRef, useState } from "react";
import Image from 'react-bootstrap/Image';
import * as S from "./style";
import { useSpring, animated } from "react-spring";
import Typed from "react-typed";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Buttons from '../Buttons/index';
import Covid from "../Covid/index";
import Header from "../Header/index";
import Footer from "../Footer/index";
import SideBar from "../Sidebar/index";
import PopUp from "../PopUp/index";
import Iframe from 'react-iframe';

const Home = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
    delay: 1000
  });

  const sloganProps = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  const kalfire = () => {
    window.location.href = '/CheminéesElectriques';
  }

  return (
    <>

    <Container>
      <Row>
        <Header></Header>
        </Row>
          {/*<PopUp></PopUp>*/}

          <animated.div style={props}>
            <S.Div>
              <Covid></Covid>
              <SideBar></SideBar>
            </S.Div>
            <S.TestDiv>
              <Row>
              <Iframe url="https://streamable.com/e/rc5tlo?autoplay=1"
        width="100%"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
</Row>
              <Footer></Footer>
            </S.TestDiv>
          </animated.div>
          </Container>
    </>
  );
};

export default Home;
