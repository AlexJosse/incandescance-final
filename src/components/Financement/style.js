import styled from "styled-components";
import WebFont from "webfontloader";

WebFont.load({
google: {
  families: ["Lora:700i&display=swap", "sans-serif"]
}
});

export const TestDiv = styled.div`
  text-align: center;
  display: relative;
  position:relative;
  height: 100%;
  flex-direction: column;
  background: grey;
  padding:30px;
`;

export const AlignDiv = styled.div`
  text-align: left;
  display: relative;
  flex-direction: column;
  background: grey;
`;

export const AlignDivTitle = styled.div`
  text-align: left;
  display: relative;
  flex-direction: column;
  background: grey;
  font-weight: bold;
  padding:30px;
  color:white;
`;

export const Align = styled.span`
  white-space: pre-wrap;
  text-align: left;
  display: relative;
  flex-direction: column;
`;

export const TestElem = styled.p`
  font-size: 22px;
  color: white;
`;
