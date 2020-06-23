import React, {useState} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../Header/index";
import Footer from "../Footer/index";
import { Player, ControlBar } from 'video-react';
import FileEone from '../../assets/pdf/e-one.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';
import KalfireLogo from "../Logo/kalfire";
import * as S from "./style";


const CheminéesElectriques = () => {

  const [source, setSource] = useState('videos/eone100.mp4');

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
    <Header></Header>
        <S.Div>
          <Player
            fluid={false}
            width={1200}
            height={600}
            autoPlay
          >
          <source src={source} />
          <ControlBar autoHide={false} />
        </Player>
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
        </S.Div>
    <Footer></Footer>
    </>
  );
};

export default CheminéesElectriques;
