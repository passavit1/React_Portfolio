import React from "react";
import styled from "styled-components";
import { TabsPages } from "../../components/index";
import { Welcome, Projects, Contract, Skill, Work } from "../index";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  animation: color-change-5x 8s linear infinite alternate both;
  @keyframes color-change-5x {
    0% {
      background: #0a0708;
    }
    100% {
      background: #171010;
    }
  }
`;

const BeforeElement = styled.div`
  content: " ";
  background: linear-gradient(to bottom right, #333 3%, transparent 20%);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const AfterElement = styled.div`
  content: " ";
  background: linear-gradient(to top left, #333 3%, transparent 20%);
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const MainPage = () => {
  return (
    <StyledContainer>
      <BeforeElement />
      <TabsPages
        welcome={<Welcome />}
        project={<Projects />}
        skill={<Skill />}
        work={<Work />}
        contract={<Contract />}
      />
      <AfterElement />
    </StyledContainer>
  );
};

export default MainPage;
