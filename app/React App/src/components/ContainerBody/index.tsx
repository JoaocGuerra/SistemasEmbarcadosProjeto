import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1% 5%;
`;

const Body = styled.div`
  flex: 1;
  display: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ContainerBody: React.FC = ({ children }) => {
  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
};

export default ContainerBody;
