import React, { useState, useEffect } from "react";
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import FileAide from '../../assets/pdf/Incandescence-Certification-Qualibois.pdf';
import FileAide2 from '../../assets/pdf/ECB-Certificat-adhesion-Incandescence.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';


const Qualibois = () => {

  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSec, setVisibleSec] = useState(false);

  const displayFirst = () => {
    setVisibleFirst(!visibleFirst);
  }

  const displaySec = () => {
    setVisibleSec(!visibleSec);
  }

  return (
    <>
      <Header></Header>
        <S.Div>
          <br></br>
          <a href='../../assets/pdf/Incandescence-Certification-Qualibois.pdf' download><Button size="lg" block variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger la Certification Qualibois</Button></a>
          <Button size="lg" block variant="dark" onClick={displayFirst}><i className="fa fa-file-download fa-2x"></i>Afficher Certification Qualibois</Button>
          {visibleFirst  ? <PDFReader  url={FileAide}
                      page={1}
                      width={1000}/> : null}
                      <br></br>
          <a href='../../assets/pdf/Incandescence-Certification-Qualibois.pdf' download><Button size="lg" block variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger la expert Chaleur</Button></a>
          <Button size="lg" block variant="dark" onClick={displaySec}><i className="fa fa-file-download fa-2x"></i>Afficher Certification expert Chaleur</Button>
          {visibleSec  ? <PDFReader  url={FileAide2}
                      page={1}
                      width={1000}/> : null}

        <Footer></Footer>
        </S.Div>
    </>
  );
};

export default Qualibois;
