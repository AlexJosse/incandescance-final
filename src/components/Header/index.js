import React from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from 'react-spring';
import Image from 'react-bootstrap/Image';
import { faFire } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../NavBar/index";
import NavBar2 from "../NavBar2/index";
import EnTete from "../../assets/others/entete.jpg"

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

const Header = () => {
  return (
    <S.HeaderDiv>
      <div>
        <S.Title>Incandescence</S.Title>
      </div>
      <S.HeaderText>
        <FontAwesomeIcon icon={faFire} color="white" />
            &nbsp; Créons ensemble votre cheminée &nbsp;
        <FontAwesomeIcon icon={faFire} color="white" />
      </S.HeaderText>
      <NavBar2></NavBar2>
    </S.HeaderDiv>
  );
};

export default Header;
