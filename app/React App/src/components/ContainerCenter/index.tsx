import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0px;
`;

const ContainerCenter: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerCenter;
