import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Iframe from 'react-iframe';
import Header from "../Header/index";
import Footer from "../Footer/index";
import FileEone from '../../assets/pdf/e-one.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';
import KalfireLogo from "../Logo/kalfire";
import * as S from "./style";
import Helmet from "react-helmet";

const CheminéesElectriques = () => {

  const [pageNumber, setpageNumber] = useState(1);

  const nextPage = () => {
    setpageNumber(pageNumber + 1);
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setpageNumber(pageNumber - 1);
    }
  }

  return (
    <>
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
    <Header></Header>
        <S.Div>
          <Iframe url="https://streamable.com/e/n0xs87?autoplay=1"
    width="100%"
    height="700px"
    id="myId"
    className="myClassname"
    display="initial"
    position="relative"/>
        <a href='../../assets/pdf/e-one.pdf' download><Button variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger le pdf</Button></a>
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

      <Footer></Footer>
        </S.Div>
    </>
  );
};

export default CheminéesElectriques;
