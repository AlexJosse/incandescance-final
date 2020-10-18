import React, { useLayoutEffect, useRef, useState } from "react";
import Image from 'react-bootstrap/Image';
import * as S from "./style";
import { useSpring, animated } from "react-spring";
import Typed from "react-typed";
import Container from 'react-bootstrap/Container';
import { useMediaQuery } from 'react-responsive';
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
import Helmet from "react-helmet";

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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Helmet>
        {/* <!-- HTML Meta Tags --> */}
        <title>Incandescence</title>
        <meta
          charSet="utf-8"
          name="incandescence"
          content="cheminée, poële, mcz, incandescence sur-mesure"
        />
        <link
            rel="myincandescence"
            href="my.myincandescence.app.com"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Reed" />
        <meta
          itemprop="incandescence"
          content="cheminée, poële, mcz, incandescence sur-mesure"
        />
      </Helmet>
      <div>
        <Header></Header>
          {/*<PopUp></PopUp>*/}
          <animated.div style={props}>

            <S.Div>
              <Covid></Covid>
              {isDesktopOrLaptop && <>
              <SideBar></SideBar></>}

            </S.Div>

            {isDesktopOrLaptop && <> <S.TestDiv>
              <Iframe url="https://streamable.com/e/rc5tlo?autoplay=1"
        width="100%"
        height="800px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
              <Footer></Footer>
            </S.TestDiv>
            </>}
          {isTabletOrMobile && <><S.TestDiv2>
                    <Iframe url="https://streamable.com/e/rc5tlo?autoplay=1"
              width="100%"
              height="400px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
            <Footer></Footer>
          </S.TestDiv2>
          </>}
          </animated.div>
        </div>
          </Container>
  );
};

export default Home;
