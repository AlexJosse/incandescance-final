import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import * as S from "./style";
import Header from "../Header/index";
import PhotoGallery from '../PhotoGrid/index';
import Footer from "../Footer/index";
import Helmet from "react-helmet";

const Gallery = () => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
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
  <div>
      <Header></Header>
              <PhotoGallery></PhotoGallery>
</div>
            </Container>
  );
};

export default Gallery;
