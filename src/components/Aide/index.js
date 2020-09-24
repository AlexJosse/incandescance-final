import React, { useState, useEffect } from "react";
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import FileAide from '../../assets/pdf/Incandescence-Aides-Financières.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';
import Helmet from "react-helmet";

const Aide = () => {

  const [pageNumber, setpageNumber] = useState(1);
  const [visibleFirst, setVisibleFirst] = useState(false);

  const displayFirst = () => {
    setVisibleFirst(!visibleFirst);
  }

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
      <title>Aide</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="aides Financières"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="aides Financières"
      />
  </Helmet>
      <Header></Header>
        <S.Div>
          <br></br>
          <a href='../../assets/pdf/Incandescence-Aides-Financières.pdf' download><Button size="lg" block variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger le PDF</Button></a>
          <br></br>
          <Button onClick={displayFirst} size="lg" block variant="dark"><i className="fa fa-file-download fa-2x"></i>Afficher le PDF</Button>
          {visibleFirst  ? <PDFReader  url={FileAide}
                      page={pageNumber}
                      width={1000}
          />
           : null}
           {visibleFirst  ? <Button variant="secondary" size="lg" block onClick={nextPage}>
                 Page Suivante
           </Button> : null}
           {visibleFirst  ? <Button variant="secondary" size="lg" block onClick={prevPage}>
                 Page Précédente
           </Button> : null}

      <Footer></Footer>
        </S.Div>
    </>
  );
};

export default Aide;
