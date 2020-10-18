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
  padding: 0;
  display: relative;
  z-index:-1;
`;

export const TestDiv2 = styled.div`
  text-align: center;
  position:relative;
  display: relative;
  flex-direction: column;
  background: grey;
  height:2000px;
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

export const Text = styled.p`
  color: white;
`;
