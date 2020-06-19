import styled from "styled-components";
import WebFont from "webfontloader";

  WebFont.load({
  google: {
    families: ["Lato", "Arial"]
  }
});

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 0.1%;

  width: 100%;
  overflow: hidden;
  background-color: black;

  font-family: "Lato", Arial;
`;

export const Item = styled.li`
  float: left;
`;

export const ItemA = styled.a`
  display: block;
  color: white;
  border: none;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background: ${({ active }) => (active === true ? "black" : "black")};
  :hover:not(.active) {
    text-decoration: underline;
    background-color: black;
  }
`;

export const Drop = styled.div`
  position: relative;
  display: inline-block;
  &:hover{
    display: block;
     }
`;

export const Dropdown = styled.button`
    display: block;
    color: white;
    border: none;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 16px;
    background: ${({ active }) => (active === true ? "black" : "black")};
    :hover:not(.active) {
      text-decoration: underline;
      background-color: black;
    }
`;

export const DropdownContent = styled.div`
   display: none;
   background-color: #f1f1f1;
   min-width: 160px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
   z-index: 1;
   :hover{
      ${Dropdown} {
        display: block;
      }
    }
   }
`;
