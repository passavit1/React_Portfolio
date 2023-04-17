import { About, CareerPath, Contact, Portfolio, Skills } from "../index";
import { Tabs } from "antd";
import styled from "styled-components";

const StyledTab = styled(Tabs)`
  color: red;
`;

const MainPage = () => {
  const tabs = [
    {
      key: "about",
      title: "About",
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
      <div>
        <StyledTab tabPosition={"left"}>
          {tabs.map(({ key, title, content }) => (
            <Tabs.TabPane key={key} tab={title}>
              {content}
            </Tabs.TabPane>
          ))}
        </StyledTab>
      </div>
    </>
  );
};

export default MainPage;
