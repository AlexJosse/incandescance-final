import React from "react";

import Container from 'react-bootstrap/Container';
import * as S from "./style";
import { useSpring, animated } from "react-spring";
import Typed from "react-typed";
import Header from "../Header/index";
import Footer from "../Footer/index";
import Helmet from "react-helmet";

const Impot = () => {

  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
    delay: 1500
  });

  return (
    <Container fluid>
    <Helmet>
      {/* <!-- HTML Meta Tags --> */}
      <title>CREDITS D'IMPOTS ET AIDES FINANCIERES</title>
      <meta
        charSet="utf-8"
        name="incandescence"
        content="CREDITS D'IMPOTS ET AIDES FINANCIERES"
      />
    <meta itemprop="name" content="myincandescence" />
      <meta
        itemprop="incandescence"
        content="CREDITS D'IMPOTS ET AIDES FINANCIERES"
      />
  </Helmet>
      <Header></Header>
      <Container>
          <animated.div style={props}>
          <S.TestDiv>
            <S.TestElem>
              <div>
                                CREDITS D'IMPOTS ET AIDES FINANCIERES
              </div>
              <div>
                  1 – Aides Publiques : Performance énergétique des bâtiments
              </div>
              <div>

                  1.1 - 6 travaux sont éligibles aux aides publiques :
              </div>
              <div>
                  isolation thermique de la toiture
              </div>
              <div>
                  isolation thermique de la moitié au moins des ouvertures donnant sur l’extérieur
              </div>
              <div>
                  isolation thermique de la moitié au moins des murs donnant sur l’extérieur
              </div>
              <div>
                  installation chaudière à condensation, micro cogénération gaz ou PAC autres que Air/Air
              </div>
              <div>
                  chaudières ou équipement de chauffage ou de production d’ECS à base de bois/biomasse
              </div>
              <div>
                  production d’ECS utilisant une source d’énergie renouvelable.
              </div>
              <div>



                  2.1 – 3 types d’aides publiques :
                </div>
                <div>




                  Le Crédit d’impôt Développement Durable (CIDD)


                  Habitation principale achevée depuis 2 ans

                  Montant maximal 8000€ (1 personne) 16 000€ (couple) + 400€ /enfant (maxi 800€)



                  si bouquet de travaux (2/6 mini) -> Taux à 25 %
                  Le délai de réalisation des travaux est possible sur 2 ans.

                  travaux seul : soumis à plafond de ressources -> Taux à 15 %
                  25 005 € (1 personne), 35 444 € (2 pers.), 44640 € (couple avec 2 enfants).



                  à noter qu’il n’y a plus de reprise d’appareils.





                  Eco-Prêt à taux zéro (Eco-PTZ) remboursable sur 10 ans


                  Résidence principale achevée avant 1990, sans condition de ressources



                  Jusqu’à 30 000 € pour financer les travaux d’énergie afin de mettre en oeuvre un bouquet de travaux ou atteindre un niveau de performance énergétique globale minimal du batiment via une étude thermique ( le DPE est exclu)

                  Un seul Eco PTZ par logement



                  Peut se combiner avec le CIDD mais dans ce cas est soumis à plafond de ressources : 25 000 € (1 personne) 35 000€ (couple) +7500€ / enfant



                  Prime exceptionnelle :  1350 € ou 3000€ cumulable CIDD et Eco-PTZ


                  Propriétaire occupant une habitation principale achevée depuis 2 ans

                  Soumis à plafond de ressources



                  2 – Taux de TVA



                  Si maison moins de 2 ans = 20%

                  Si maison + de 2 ans sans fourniture et pose d'appareil éligible au crédit d impôt : 10%

                  Si maison + de 2 ans avec fourniture et pose d appareil éligible a crédit d impôt : 5.5%





                  3 – Professionnel RGE, reconnu Grenelle de l’Environnement (ex Qualibois)



                  Peuvent obtenir la qualification RGE, les professionnels qui proposent une prestation globale : vente et pose, ce qui interdit de sous-traiter plus de 30 % des poses.



                  Cette éco-conditionalité est nécessaire :



                  Depuis le 1/1/2013 pour obtenir un CEE (certificat économie Energie)
                  à partir du 1/07/2014 pour obtenir l’Eco-PTZ
                  à partir du 1/07/2015 pour obtenir le CIDD (prévu)




                  4 – RT 2012



                  Rappel : tous les appareils de chauffage au bois peuvent franchir le seuil des maisons individuelles car tous les appareils de chauffage au bois permettent de répondre à l’exigence de la RT 2012, qui impose d’avoir recours à, au moins, une source d’énergie renouvelable.



                  Les appareils à  bois non-pourvus d’une régulation automatique, sont prescriptibles si le logement est équipé d’un système principal de chauffage doté d’un dispositif d’arrêt manuel et d’un réglage automatique de la température intérieure.

                  Les appareils fonctionnant au bois interviennent alors comme un complément de chauffage permettant de réduire la consommation de gaz ou d’électricité.


                  Aide de l'ANAH (www.anah.fr)
                  L'Agence Nationale pour l'Amélioration de l'Habitat octroie une aide financière aux propriétaires occupants faisant l'acquisition d'un appareil labellisé Flamme Verte.
              </div>
            </S.TestElem>
            <Footer></Footer>
          </S.TestDiv>
        </animated.div>
      </Container>
    </Container>
  );
};

export default Impot;
