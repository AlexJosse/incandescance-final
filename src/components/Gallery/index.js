import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header/index";
import PhotoGallery from '../PhotoGrid/index';
import Button from "../Button/index";
import Footer from "../Footer/index";
import Helmet from "react-helmet";

const Gallery = () => {
  return (
    <>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Réalisations incandescence</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Réalisations incandescence"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Réalisations incandescence"
      />
  </Helmet>
      <Header></Header>
          <S.TestDiv>
              <PhotoGallery></PhotoGallery>
              <Footer></Footer>
          </S.TestDiv>
    </>
  );
};

export default Gallery;
