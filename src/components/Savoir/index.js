import React, { useState } from "react";
import * as S from "./style";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";

const Savoir = () => {

  return (
    <>
      <Header></Header>
        <S.Div>
          <S.Ul>
            <S.Li>
              <S.Text><strong>Le sur mesure </strong>,est au cœur de notre activité, concevoir des solutions classiques, design, techniques, innovantes, pour s’adapter aux envies, exigences et contraintes des clients</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>L’écoute, le conseil, l’accompagnement, la proximité</strong>, sont les valeurs fondamentales de notre travail au quotidien,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Des équipes techniques expérimentées et exclusives</strong> pour la mise en œuvre et assurer la maintenance des installations,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Un très large choix de matériaux </strong>(Marbre, roche, granit, pierre calcaire et marbrière, briquette et aciers (nombreuses couleurs au choix) pour concevoir vos projets,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Les nouvelles technologies </strong>sont un axe majeur de nos propositions pour toujours plus de performance et de beauté,</S.Text>
            </S.Li>
            <S.Li>
              <S.Text><strong>Incandescence est certifiée</strong> par le label RGE QUALIBOIS et EXPERT CHALEUR BOIS</S.Text>
            </S.Li>
          </S.Ul>
          <Footer></Footer>
        </S.Div>
    </>
  );
};

export default Savoir;
