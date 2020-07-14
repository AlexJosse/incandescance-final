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
  background: #f6f6f6;
  padding: 30px;
`;

export const TestElem = styled.p`
  font-family: "Lora", serif;
  font-size: 22px;
  /* font-family: ; */
`;


export const TypedBlock = styled.div`
  text-align: center;
`;
