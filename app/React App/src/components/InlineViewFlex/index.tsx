import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px 0px;
`;

const InlineViewFlex: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default InlineViewFlex;
