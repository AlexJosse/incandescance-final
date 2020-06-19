import styled from "styled-components";

export const ItemA = styled.a`
  color: white;
  border: none;
  text-decoration: none;
  :hover:not(.active) {
    text-decoration: underline;
  }
`;

export const ItemB = styled.li`
  color: black;
  border: none;
  text-decoration: none;
  :hover:not(.active) {
    text-decoration: underline;
  }
`;
