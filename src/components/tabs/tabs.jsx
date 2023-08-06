import React, { useState } from "react";
import styled from "styled-components";
import { Col, Nav, Row, Tab } from "react-bootstrap";

const StyledContainer = styled.div`
  height: 90%;
  width: 70vw;
  color: white;
  border-radius: 25px;
  z-index: 3;

  .row {
    margin-top: 20vh;
  }

  .nav-item {
    margin-bottom: 2rem;
  }

  .contentContainer {
    // background-color: red;
    height: 100%;
  }
`;
const TabsPages = ({ welcome, project, skill, work, contract }) => {
  const [activeTab, setActiveTab] = useState("welcome");

  const handleNavClick = (eventKey) => {
    setActiveTab(eventKey === activeTab ? "welcome" : eventKey);
  };

  return (
    <StyledContainer>
      <Tab.Container id="left-tabs-example" activeKey={activeTab}>
        <Row>
          <Col sm={4}>
            <Nav
              variant="pills"
              id="nav"
              className="flex-column justify-content-center"
            >
              <Nav.Item className="">
                <Nav.Link eventKey="welcome" style={{ display: "none" }}>
                  welcome
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="skills"
                  onClick={() => handleNavClick("skills")}
                >
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="projects"
                  onClick={() => handleNavClick("projects")}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="exp"
                  onClick={() => {
                    handleNavClick("exp");
                  }}
                >
                  WORK EXPERIENCE
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="contract"
                  onClick={() => {
                    handleNavClick("contract");
                  }}
                >
                  Contract
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content className="contentContainer">
              <Tab.Pane eventKey="welcome">{welcome}</Tab.Pane>
              <Tab.Pane eventKey="skills">{skill}</Tab.Pane>
              <Tab.Pane eventKey="projects">{project}</Tab.Pane>
              <Tab.Pane eventKey="exp">{work}</Tab.Pane>
              <Tab.Pane eventKey="contract">{contract}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </StyledContainer>
  );
};

export default TabsPages;
