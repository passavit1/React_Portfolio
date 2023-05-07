import { About, CareerPath, Contact, Portfolio, Skills } from "../index";
import { Tabs } from "antd";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: 100vh;
  background-color: rgb(29, 29, 32);
  display: flex;
  justify-content: center;
  align-items: center;

  .Content {
    height: 90%;
    width: 93%;
    border-radius: 25px;
    border: 1px solid blue;

    .HeaderName {
      height: 18%;
      padding: 1rem;

      p {
        padding-left: 1.8rem;
        text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
      }

      p:first-child {
        color: red;
        font-size: 3rem;
        margin-bottom: 10px;
      }

      p:last-child {
        color: blue;
        font-size: 2rem;
      }
    }

    .ant-tabs {
      height: 82%;
      color: rgb(243, 243, 243);

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
          box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.25);
          border-radius: 39px;
          border: 0.2px solid rgba(0, 0, 0, 0.13);
        }

        .ant-tabs-ink-bar {
          display: none;
        }
      }

      // Content

      .ant-tabs-content-holder {
        height: 100%;
        display: flex;
        justify-content: center;
        border-left: none;

        .ant-tabs-content {
          height: 95%;
          width: 90%;
          box-shadow: inset 1px 1px 12px rgba(0, 0, 0, 0.25),
            inset -8px -8px 9px 2px rgba(0, 0, 0, 0.25);
          border-radius: 44px;
          padding: 2rem;
        }

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
            <p>PASSAVIT MAICHAROEN</p>
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
