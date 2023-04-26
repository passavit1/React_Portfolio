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

    border: 1px solid blue;

    .HeaderName {
      height: 15%;
    }

    .ant-tabs {
      height: 85%;

      .ant-tabs-nav {
        width: 30%;
      }

      .ant-tabs-tab {
        height: 16 %;
        display: flex;
        text-align: center;
        justify-content: center;
        border: 1px solid red;
      }

      .ant-tabs-ink-bar {
        display: none;
      }

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
