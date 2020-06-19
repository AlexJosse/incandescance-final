import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: ${props => (props.primary ? ' #4CAF50' : 'white')};
  border: ${props =>
    props.primary ? '2px solid  #4CAF50' : '2px solid white'};
  margin-top: 3% ;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? ' #4CAF50' : 'white'};
  }
`;

export default Button;
