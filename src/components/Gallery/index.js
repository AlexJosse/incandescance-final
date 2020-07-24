import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header/index";
import PhotoGallery from '../PhotoGrid/index';
import Button from "../Button/index";
import Footer from "../Footer/index";

const Gallery = () => {
  return (
    <>
      <Header></Header>
          <S.TestDiv>
              <PhotoGallery></PhotoGallery>
              <Footer></Footer>
          </S.TestDiv>
    </>
  );
};

export default Gallery;
