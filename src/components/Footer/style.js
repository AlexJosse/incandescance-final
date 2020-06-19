import styled from "styled-components";
import WebFont from "webfontloader";

  WebFont.load({
  google: {
    families: ["Lora:700i&display=swap", "sans-serif"]
  }
});

export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #333;
  color: white;
  margin-bottom: 0px;
`;

export const FooterContent = styled.div`
  display: fex;
`;

export const FooterTexT = styled.p`
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Lora", serif;
  font-size: 20px;
`;

export const FooterLeft = styled.p`
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Lora", serif;
`;

export const FooterRight = styled.p`
  text-align: justify;
  margin-left: 30px;

  font-family: "Lora", serif;
`;

export const Text = styled.a`
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  text-decoration: underline;
  }
`;
