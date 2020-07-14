import React, { useState, useEffect } from "react";
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import FileAide from '../../assets/pdf/qualibois.pdf';
import { PDFReader  } from 'react-read-pdf';
import Button from 'react-bootstrap/Button';


const Qualibois = () => {

  return (
    <>
      <Header></Header>
        <S.Div>
          <a href='../../assets/pdf/qualibois.pdf' download><Button variant="dark"><i className="fa fa-file-download fa-2x"></i>Télécharger le pdf</Button></a>
          <PDFReader  url={FileAide}
                      page={1}
                      width={1000}
          />

        <Footer></Footer>
        </S.Div>
    </>
  );
};

export default Qualibois;
