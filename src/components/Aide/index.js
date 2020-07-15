import React, { useState, useEffect } from "react";
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import FileAide from '../../assets/pdf/Incandescence-Aides-Financières.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';


const Aide = () => {

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
          <a href='../../assets/pdf/Incandescence-Aides-Financières.pdf' download><Button variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger le pdf</Button></a>
          <PDFReader  url={FileAide}
                      page={pageNumber}
                      width={1000}
          />
        <Button variant="secondary" size="lg" block onClick={nextPage}>
              Page Suivante
        </Button>
        <Button variant="secondary" size="lg" block onClick={prevPage}>
              Page Précédente
        </Button>
        </S.Div>
      <Footer></Footer>
    </>
  );
};

export default Aide;
