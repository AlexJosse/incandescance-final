import React from "react";
import * as S from "./style";

const Container = ({ children, ...props }) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
