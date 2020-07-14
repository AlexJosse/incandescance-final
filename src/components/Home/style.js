import styled from "styled-components";
import WebFont from "webfontloader";

WebFont.load({
google: {
  families: ["Lora:700i&display=swap", "sans-serif"]
}
});

export const TestDiv = styled.div`
  text-align: center;
  position: relative;
  height: 1400px;
  flex-direction: column;
  background: grey;
  padding:30px;
  z-index:-1;
`;

export const Overlay = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:1;
`;

export const Div = styled.div`
  text-align: left;
  display: relative;
  flex-direction: column;
  background: grey;
`;

export const TestElem = styled.p`
  font-size: 22px;
  color: white;
`;


export const TypedBlock = styled.div`
  text-align: center;
`;

export const Anim = styled.div`
  transform: translateX(${({ animate }) => (animate ? "25%" : "-100vw")});
  transition: transform 2s;
  text-align: center;
  display: flex;
  flex-direction: flex;
  background: black;
`;

export const H3 = styled.h3`
  color: red;
`;
