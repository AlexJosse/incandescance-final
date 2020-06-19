import styled, { keyframes } from "styled-components";
import WebFont from "webfontloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

  WebFont.load({
  google: {
    families: ["Lora:700i&display=swap", "sans-serif"]
  }
});

export const HeaderDiv = styled.div`
  display: column;
  flex-wrap: wrap;
  align-content: flex-end;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;
`;


export const HeaderImg  = styled.img`

`;

export const HeaderText = styled.p`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 200%;
  color:white;
  font-family: "Lora", serif;
`;

export const Title = styled.p`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-family: Arial;
  font-style: italic;
  font-size: 300%;

  font-weight: 900;
  color:red;
  text-decoration: underline;
`;

const loop = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100%, 0);
  }
`;

export const AnimText = styled.p`
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  font-family: "Lora", serif;
  color:red;
`;

export const AnimSpan = styled.span`
  display: inline-block;
  padding-left: 100%;
  animation: ${loop} 15s linear infinite;
`;
