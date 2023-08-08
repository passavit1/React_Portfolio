import React from "react";
import { Container, Card, ListGroup, Badge } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: -10vh;
  width: 55vw;

  .container {
    max-width: unset;
  }

  h2 {
    text-align: center;
    margin-bottom: 3vh;
    font-size: 3vw;
  }

  #cardTitle {
    font-size: 1.5vw;
    span {
      margin-left: 1vw;
      font-size: 1vw;
    }
  }

  #duration {
    font-size: 1.2vw;
  }

  font-size: 1vw;

  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 4vw;
    }
  }
  @media screen and (max-width: 950px) {
    #cardTitle {
      span {
        margin: unset;
      }
    }
  }

  @media screen and (max-width: 790px) {
    margin: unset;
    width: 100%;
    display: flex;

    #cardContainer {
      margin: 0 1vw;
    }

    #cardTitle {
      font-size: 3vw;
      span {
        margin-left: 1vw;
        font-size: 2vw;
      }
    }

    #duration {
      font-size: 1.8vw;
    }

    font-size: 1.8vw;
  }
  @media screen and (max-width: 400px) {
    #cardTitle {
      font-size: 3vw;
      span {
        margin-left: 2vw;
        font-size: 2vw;
      }
    }

    #duration {
      font-size: 2vw;
      margin-bottom: -1vh !important;
    }

    font-size: 2.2vw;
  }
`;

const ScrollableList = styled(ListGroup)`
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;

const Work = () => {
  const workExperienceData = [
    {
      company: "SiS Distribution Thailand PC",
      jobTitle: "Cloud Representative",
      duration: "Sep 2022 - Jun 2023",
      responsibilities: [
        "Act as a liaison between clients and the company, providing support and information about cloud-based products and services",
        "Identify and develop new business opportunities within assigned territory",
        "Collaborate with sales and technical teams to ensure customer satisfaction and retention",
      ],
    },
    {
      company: "Possefy Group Company Limited",
      jobTitle: "Area Sales",
      duration: "Oct 2018 - Aug 2022",
      responsibilities: [
        "Responsible for overall sales performance of area to achieve sales goals",
        "Develop and maintain relationships with key clients and stakeholders",
        "Implement sales strategies to expand market share and increase profitability",
      ],
    },
    {
      company: "DIA International Audit Co., Ltd.",
      jobTitle: "Auditor Assistant",
      duration: "Jan 2017 - Apr 2018",
      responsibilities: [
        "Verified various financial statements on a quarterly basis",
        "Submitted reports to senior auditor for review and analysis",
        "Assisted in the planning and execution of audit engagements",
      ],
    },
    {
      company: "Wing Span Services Company Limited",
      jobTitle: "Accounting Officer",
      duration: "Aug 2016 - Dec 2016",
      responsibilities: [
        "Prepared and submitted monthly statistical reports on traffic, productivity, and aircraft usage",
        "Assisted with the development and implementation of financial policies and procedures",
        "Ensured accuracy and compliance with applicable accounting standards and regulations",
      ],
    },
  ];

  return (
    <StyledContainer>
      <Container>
        <h2>Work Experience</h2>
        <ScrollableList>
          {workExperienceData.map((experience, index) => (
            <Card key={index} className="mb-3" id="cardContainer">
              <Card.Body>
                <Card.Title id="cardTitle">
                  {experience.company}
                  <Badge variant="primary" className="ml-2">
                    {experience.jobTitle}
                  </Badge>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" id="duration">
                  {experience.duration}
                </Card.Subtitle>
                <Card.Text>{experience.description}</Card.Text>
                <ListGroup variant="flush">
                  {experience.responsibilities.map((responsibility, i) => (
                    <ListGroup.Item key={i}>{responsibility}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          ))}
        </ScrollableList>
      </Container>
    </StyledContainer>
  );
};

export default Work;
