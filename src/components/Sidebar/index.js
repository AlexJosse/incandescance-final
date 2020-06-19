import React, {Component, useState} from 'react';
import * as S from "./style";
import './style.css';

const SideBar = () => {

  const goFb = () => {
    window.open("https://www.facebook.com/Incandescence-517594435066890/", "_blank");
  };

  const goIg = () => {
    window.open("https://www.instagram.com/incandescence95220/", "_blank");
  };

  const goMessage = () => {
    window.open("https://www.facebook.com/Incandescence-517594435066890/", "_blank");
  };

  return(
    <>
    <div id="mySidenav" class="sidenav">
      <a href="#" id="facebook" onClick={goFb}><i className="fa fa-facebook fa-2x"></i>&nbsp;&nbsp;&nbsp;Notre page</a>
      <a href="#" id="instagram" onClick={goIg}><i className="fa fa-instagram fa-2x"></i>&nbsp;&nbsp;Notre Instragram</a>
      <a href="#" id="contact" onClick={goMessage}><i className="fa fa-envelope fa-2x"></i>&nbsp;&nbsp;Nous contactez</a>
    </div>
    </>
  );
}

export default SideBar;
