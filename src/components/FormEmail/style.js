import styled from "styled-components";
import WebFont from "webfontloader";

  WebFont.load({
  google: {
    families: ["Lora:700i&display=swap", "sans-serif"]
  }
});

export const Form = styled.div`
  display: relative;
  flex-direction: column;
  height: 2200px;
  padding: 60px;
  text-align: center;
  background: grey;
`;

export const Foo = styled.div`
  text-align: center;
  display: relative;
  flex-direction: column;
  background: black;
`;

export const Div = styled.div`
  height:50px;
  padding: 30px;
  margin-bottom:10px;
`;

export const DivSend = styled.div`
  height:50px;
  padding: 30px;
  margin-bottom:10px;
`;

export const P = styled.p`
  color: white;
  font-size:30px;
  font-weight: bold;
`;

export const Input = styled.input`
  size: 600;
  height:50px;
  width: 50%;
`;

export const InputSend = styled.input`
  size: 600;
  height:50px;
  width: 50%;

  margin-top:50px;
`;

export const TextArea = styled.textarea`
  height: 150px;
  font-size: 16px;
  resize: none;
  width: 50%;
`;
