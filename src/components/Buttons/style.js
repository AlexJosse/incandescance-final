import styled, {createGlobalStyle} from "styled-components";

export const Div = styled.div`
width: 25%;
  height: 25vh; // experiment with this value, try changing to 110vh
  min-height: 200px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
`;
