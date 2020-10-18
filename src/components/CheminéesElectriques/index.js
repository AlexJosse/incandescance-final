import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Iframe from 'react-iframe';
import Header from "../Header/index";
import Footer from "../Footer/index";
import FileEone from '../../assets/pdf/e-one.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';
import KalfireLogo from "../Logo/kalfire";

import KalfirePhoto from "../../assets/logo/kalfire.png";
import * as S from "./style";
import Helmet from "react-helmet";

const CheminéesElectriques = () => {

  const [pageNumber, setpageNumber] = useState(1);

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

  const nextPage = () => {
    setpageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setpageNumber(pageNumber - 1);
    }
  }

  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Cheminées Electrique</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Cheminées Electrique"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Cheminées Electrique"
      />
  </Helmet>
  <div>
    <Header></Header>
    </div>
        <S.Div>
          <Iframe url="https://streamable.com/e/n0xs87?autoplay=1"
    width="100%"
    height="400px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
        <a href='../../assets/pdf/e-one.pdf' download><Button variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger le pdf</Button></a>
        {isDesktopOrLaptop && <>
        <PDFReader  url={FileEone}
                    page={pageNumber}
                    width={1000}
        />
        <Button variant="secondary" size="lg" block onClick={nextPage}>
              Page Suivante
        </Button>
        <Button variant="secondary" size="lg" block onClick={prevPage}>
              Page Précédente
        </Button>

          <Row>
            <Col><KalfireLogo></KalfireLogo></Col>
          </Row>
          </>}
          {isTabletOrMobile && <> <Row>
            <Col>
              <a href="https://kalfire.com/fr">
                <Image src={KalfirePhoto} fluid />
              </a>
            </Col>
            </Row>
            </>}
      <Footer></Footer>
        </S.Div>
    </Container>
  );
};

export default CheminéesElectriques;
