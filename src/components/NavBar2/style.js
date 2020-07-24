import styled from "styled-components";

export const ItemA = styled.a`
  color: white;
  text-decoration: none;
  border: none;
  :hover:not(.active) {
    text-decoration: underline;
  }
  font-size: smaller;
`;

export const ItemB = styled.li`
  color: black;
  border: none;
  text-decoration: none;
  :hover:not(.active) {
    text-decoration: underline;
  }
`;
