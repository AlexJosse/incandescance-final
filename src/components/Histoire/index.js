import React, { useState } from "react";
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import Helmet from "react-helmet";

const Histoire = () => {

  return (
    <>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>Histoire incandescence</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="Histoire incandescence"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="Histoire incandescence"
      />
  </Helmet>
      <Header></Header>
        <S.Div>
          <S.Ul>
            <S.Li>
              <S.Text><strong>Incandescence, entreprise familiale</strong>, spécialisée dans la conception et l’installation de poêles, inserts, cheminée à bois, à granulés ou à gaz, électrique, foyer ouvert ou fermé, …</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>	Depuis plus de 15 ans</strong>, Incandescence accompagne ses clients dans leur projet,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Plus de 1000 réalisations</strong> depuis notre création en 2004, Incandescence est reconnu comme un acteur de référence dans son domaine,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Nos clients privilégiés</strong> sont les particuliers, architectes, décorateurs, professionnels du bâtiment, constructeurs,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Les plus grandes marques</strong> sont proposées à notre catalogue pour vous assurer qualité, désign, performance et durabilité,</S.Text>
            </S.Li>
          </S.Ul>
          <Footer></Footer>
        </S.Div>
    </>
  );
};

export default Histoire;
