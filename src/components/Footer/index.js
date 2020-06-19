import React from "react";
import * as S from "./style";

const Header = () => {

  const goInsta = () => {
     window.open("https://www.instagram.com/incandescence95220/", "_blank");
  };

  const goFacebook = () => {
     window.open("https://www.facebook.com/Incandescence-517594435066890/", "_blank");
  };

  return (
      <S.Footer>
        <S.FooterTexT>Incandescence</S.FooterTexT>
            <S.FooterContent>
              <div>
                <S.FooterLeft>Notre magasin : Du mardi au samedi de 10H00 à 12H00 et de 14H00 à 18H00</S.FooterLeft>
              </div>
              <div>
                <S.FooterRight>
                  <a href="/contact">
                  <S.Text>Nous contacter</S.Text>
                  </a>
                </S.FooterRight>
              </div>
              <div>
                <S.FooterRight>
                <a href="">
                <i onClick={goInsta} className="fa fa-instagram fa-2x"></i>
                </a>
                </S.FooterRight>
              </div>
              <div>
                <S.FooterRight>
                <a href="">
                <i onClick={goFacebook} className="fa fa-facebook fa-2x"></i>
                </a>
                </S.FooterRight>
              </div>
              <div>
                <S.FooterLeft>222 Boulevard du Havre 95220 La Patte d'Oie d'Herblay Tél : 01.39.78.96.95</S.FooterLeft>
              </div>
            </S.FooterContent>
      </S.Footer>
  );
};

export default Header;
