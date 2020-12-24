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
  display: flex;
  flex-direction: column;
  background: grey;
  padding: 30px;
  height: 100%;
`;

export const Intro = styled.p`
  font-size: 22px;
  color: white;
  /* font-family: ; */
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
