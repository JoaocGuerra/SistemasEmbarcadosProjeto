import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0px 110px;
`;

const ContainerCards: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerCards;
