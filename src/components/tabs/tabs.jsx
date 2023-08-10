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
    height: 100%;
  }

  .navItem {
    text-align: center;
    margin-left: -1vw;
    transition: transform 1s ease, background-color 1s ease;
    width: 80%;
    border-radius: 20px;

    .navLink {
      color: white;
      font-size: 1.5vw;

      &.active {
        background-color: transparent;

        hr {
          border: 1px solid red;
          width: 100%;
          transition: 0.4s;
          opacity: 0.6;
        }
      }

      span {
        display: inline-block;
      }
    }

    hr {
      margin: 0;
      width: 0;
    }

    &:hover {
      transform: scale(1.3);
      background-color: rgb(38, 37, 37);

      hr {
        border: 1px solid red;
        width: 100%;
        transition: 0.4s;
        opacity: 0.6;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .navItem {
      .navLink {
        font-size: 1.3vw;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .navItem {
      .navLink {
        font-size: 1.5vw;
      }
    }
  }

  @media screen and (max-width: 790px) {
    height: 100vh;
    width: 100vw;

    .row {
      flex-direction: column;

      height: 100%;
      width: 100%;
      margin: 0;

      .menu {
        width: 100%;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;

        #nav {
          flex-direction: row !important;
          width: 100%;

          div:first-child {
            width: 0%;
          }

          div {
            width: 25%;
          }

          .navItem {
            margin: 0;

            &:hover {
              background-color: transparent;
            }

            .navLink {
              font-size: 2vw;
            }
          }
        }
      }

      .content {
        height: 80%;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 610px) {
    .navItem {
      .navLink {
        font-size: 2.5vw !important;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .navItem {
      .navLink {
        font-size: 3vw !important;
      }
    }
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
          <Col sm={4} className="menu">
            <Nav
              variant="pills"
              id="nav"
              className="flex-column justify-content-center"
            >
              <Nav.Item>
                <Nav.Link eventKey="welcome" style={{ display: "none" }}>
                  welcome
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Nav.Link
                  eventKey="skills"
                  onClick={() => handleNavClick("skills")}
                  className="navLink"
                >
                  <span>
                    Skills
                    <hr />
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Nav.Link
                  eventKey="projects"
                  onClick={() => handleNavClick("projects")}
                  className="navLink"
                >
                  <span>
                    Projects
                    <hr />
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Nav.Link
                  eventKey="exp"
                  onClick={() => {
                    handleNavClick("exp");
                  }}
                  className="navLink"
                >
                  <span>
                    WORK EXPERIENCE
                    <hr />
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Nav.Link
                  eventKey="contract"
                  onClick={() => {
                    handleNavClick("contract");
                  }}
                  className="navLink"
                >
                  <span>
                    Resume & Contact
                    <hr />
                  </span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8} className="content">
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
