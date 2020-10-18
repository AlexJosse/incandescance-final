import styled from "styled-components";
import WebFont from "webfontloader";

  WebFont.load({
  google: {
    families: ["Lora:700i&display=swap", "sans-serif"]
  }
});

export const TestDiv = styled.div`
  text-align: center;
  position:relative;
  display: relative;
  height: 2500px;
  flex-direction: column;
  background: grey;
  padding:30px;
`;


export const HeaderImg  = styled.img`

`;

export const Button = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
`;

export const HeaderText = styled.p`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;

`;
export const ButtonText = styled.p`
`;
