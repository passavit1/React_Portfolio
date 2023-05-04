import { About, CareerPath, Contact, Portfolio, Skills } from "../index";
import { Tabs } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  background-color: #d8dee8;
  display: flex;
  justify-content: center;
  align-items: center;

  .Content {
    height: 90%;
    width: 93%;
    border-radius: 25px;
    border: 1px solid blue;

    .HeaderName {
      height: 15%;
    }

    .ant-tabs {
      height: 85%;

      .ant-tabs-nav {
        width: 30%;
      }

      // NavBar

      .ant-tabs-nav-list {
        display: flex;
        align-items: center;

        .ant-tabs-tab {
          height: 16 %;
          width: 80%;
          justify-content: center;
          box-shadow: 9px 7px 4px -1px rgba(0, 0, 0, 0.25);
          border-radius: 39px;
          border: 0.2px solid rgba(0, 0, 0, 0.13);
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      }

      // Content

      .ant-tabs-content-holder {
        border: 1px solid green;
        background-color: #c1cfe8;
        height: 100%;
      }

      .ant-tabs-content {
        height: 100%;

        .ant-tabs-tabpane {
          height: 100%;
        }
      }
    }
  }
`;

const MainPage = () => {
  const tabs = [
    {
      key: "about",
      title: "About Me",
      content: <About />,
    },
    {
      key: "portfolio",
      title: "Portfolio",
      content: <Portfolio />,
    },
    {
      key: "career-path",
      title: "Career Path",
      content: <CareerPath />,
    },
    {
      key: "skills",
      title: "Skills",
      content: <Skills />,
    },
    {
      key: "contact",
      title: "Contact",
      content: <Contact />,
    },
  ];

  return (
    <>
      <StyledContainer>
        <div className="Content">
          <div className="HeaderName">
            <p>Passavit Maicharoen</p>
            <p>Full Stack Developer</p>
          </div>
          <Tabs tabPosition={"left"}>
            {tabs.map(({ key, title, content }) => (
              <Tabs.TabPane key={key} tab={title}>
                {content}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </StyledContainer>
    </>
  );
};

export default MainPage;
