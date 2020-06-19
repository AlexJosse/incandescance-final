import styled from "styled-components";
import { theme } from "styled-tools";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 150px;

  @media (min-width: ${theme("breakpoints.sm")}) {
    max-width: 540px;
  }

  @media (min-width: ${theme("breakpoints.md")}) {
    max-width: 720px;
  }

  @media (min-width: ${theme("breakpoints.lg")}) {
    max-width: 960px;
  }

  @media (min-width: ${theme("breakpoints.xl")}) {
    max-width: 1700px;
  }
`;

export default {
  Container
};
