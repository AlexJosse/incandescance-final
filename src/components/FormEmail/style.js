import styled from "styled-components";
import WebFont from "webfontloader";

export const Div = styled.div`
  text-align: center;
  display: relative;
  position:relative;
  height: 2000px;
  flex-direction: column;
  background: grey;
  padding:30px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`
