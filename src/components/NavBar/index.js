import React, { useState } from "react";
import * as S from "./style";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "../Home/index";
import Showroom from "../Showroom/index";
import Gallery from "../Gallery/index";
import FormEmail from "../FormEmail/index";


const NavBar = () => {
  const [FirstItem, setFirstItem] = useState(true);
  const [SecondItem, setSecondItem] = useState(false);
  const [ThirdItem, setThirdItem] = useState(false);
  const [FourthItem, setFourthItem] = useState(false);
  const [FiveItem, setFiveITem] = useState(false);

  const toggleFirstItem = () => {
    if (!FirstItem && (FourthItem || SecondItem || ThirdItem || FourthItem)) {
      setFirstItem(true);
      setSecondItem(false);
      setThirdItem(false);
      setFourthItem(false);
      setFiveITem(false);
    }
  };

  const toggleSecondItem = () => {
    if (!SecondItem && (FourthItem || FirstItem || ThirdItem || FourthItem)) {
      setSecondItem(true);
      setFirstItem(false);
      setThirdItem(false);
      setFourthItem(false);
      setFiveITem(false);
    }
  };

  const toggleThirdItem = () => {
    if (!ThirdItem && (FourthItem || FirstItem || SecondItem || FourthItem)) {
      setThirdItem(true);
      setSecondItem(false);
      setFirstItem(false);
      setFourthItem(false);
      setFiveITem(false);
    }
  };

  const toggleFourthItem = () => {
    if (!FourthItem && (FourthItem || FirstItem || SecondItem || ThirdItem)) {
      setFourthItem(true);
      setSecondItem(false);
      setFirstItem(false);
      setThirdItem(false);
      setFiveITem(false);
    }
  };

  const toggleFiveItem = () => {
    if(!FiveItem && (FourthItem || FirstItem || SecondItem || ThirdItem)) {
      setFiveITem(true);
      setSecondItem(false);
      setFirstItem(false);
      setThirdItem(false);
      setThirdItem(false);
    }
  };

  return (
    <S.List>
      <S.Item>
        <S.ItemA onClick={toggleFirstItem} active={FirstItem} href="/home">
          Accueil
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFirstItem} active={FirstItem} href="/showroom">
          Showroom
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
          Poêles
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.Drop>
          <S.Dropdown onClick={toggleFourthItem} active={FourthItem} href="/contact">
            Cheminées
            <S.DropdownContent>
              <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
                Cheminées bois
              </S.ItemA>
              <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
                Cheminées Gaz
              </S.ItemA>
            </S.DropdownContent>
          </S.Dropdown>
        </S.Drop>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
          Bois Compressé
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleThirdItem} active={ThirdItem} href="/gallery">
          Réalisations
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFiveItem} active={FiveItem} href="/impot">
          Crédits d'Impôts Avantages Financiers
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
          Nous Contacter
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
          Nous rendre visite
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
          Certification QUALIBOIS
        </S.ItemA>
      </S.Item>
      <S.Item>
        <S.ItemA onClick={toggleFourthItem} active={FourthItem} href="/contact">
          Financement Sans Frais
        </S.ItemA>
      </S.Item>
    </S.List>
  );
};

export default NavBar;
