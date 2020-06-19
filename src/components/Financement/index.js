import React, { useLayoutEffect, useRef, useState } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import * as S from "./style";
import Container from "../Container/index";
import { useSpring, animated } from "react-spring";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import Logo from "../../assets/others/franfinance.png";

const Financement = () => {

  const [visibleFirst, setVisibleFirst] = useState(true);
  const [visibleSec, setVisibleSec] = useState(true);

  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
    delay: 500
  });

  const sloganProps = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  const imageClick = () => {
    window.open("https://www.franfinance.fr/", "_blank");
  }

  const displayFirst = () => {
    setVisibleFirst(!visibleFirst);
  }

  const displaySec = () => {
    setVisibleSec(!visibleSec);
  }
  return (
    <>
      <Header></Header>
        <animated.div style={props}>
          <S.TestDiv>
            <S.TestElem>
              <S.AlignDivTitle>
              Nous vous accompagnons dans votre projet avec dans une solution de payement en 3 ou 12 fois sans frais grâce notre partenaire FRANFINANCE
              </S.AlignDivTitle>
                <Button variant="dark" size="lg" block onClick={displayFirst}>
                  Pièces justificatives pour un payement en 3 fois sans frais:
                </Button>
              <div>
                  {visibleFirst ? '' : <S.Align>- SCAN ou PHOTOCOPIE de  votre carte d identité ou passeport en cours de validité (si périmé de moins de 5 ans merci de joindre votre permis de conduire en plus)<br/>- RIB du compte à débiter (avec  nom de famille du demandeur obligatoirement)<br/>- Justificatif de domicile de moins de 3 mois (facture EDF ou VEOLIA, avis foncier, facture de téléphone etc..) à l'adresse du Chantier</S.Align>}
              </div>
              <Button variant="dark" size="lg" block onClick={displaySec}>
                Pièces justificatives pour un payement en 12 fois sans frais:
              </Button>
              <div>
                {visibleSec ? '' : <S.Align>- SCAN ou PHOTOCOPIE de  votre carte d identité ou passeport en cours de validité (si périmé de moins de 5 ans merci de joindre votre permis de conduire en plus)<br/> - RIB du compte à débiter (avec  nom de famille du demandeur obligatoirement)<br/> - Justificatif de domicile de moins de 3 mois (facture EDF ou VEOLIA, avis foncier, facture de téléphone etc..) à l'adresse du Chantier<br/> - Si vous êtes salarié (votre dernière fiche de paye intégrale), <br/>Si vous êtes à votre compte : Vos deux derniers avis Fiscaux.</S.Align>}
              </div>
              <S.AlignDivTitle>
                Nous proposons également des financement avec frais sur de plus longues périodes (nous consulter pour barème tarifaire)
              </S.AlignDivTitle>
              <a href="">
              <Image src={Logo} fluid onClick={() => imageClick()}/>
              </a>
            </S.TestElem>
          </S.TestDiv>
        </animated.div>
      <Footer></Footer>
    </>
  );
};

export default Financement;
