import React from "react";
import styled from "styled-components";
import IconCSS from "../../items/icon/icons8-css.svg";
import IconExpress from "../../items/icon/icons8-express-js.svg";
import IconGit from "../../items/icon/icons8-git.svg";
import IconHTML from "../../items/icon/icons8-html-5.svg";
import IconJavascript from "../../items/icon/icons8-javascript.svg";
import IconMongo from "../../items/icon/icons8-mongodb.svg";
import IconMySQL from "../../items/icon/icons8-mysql.svg";
import IconNodeJs from "../../items/icon/icons8-nodejs.svg";
import IconPostgre from "../../items/icon/icons8-postgresql.svg";
import IconReact from "../../items/icon/icons8-react-native.svg";

const StyledContainer = styled.div`
  margin-top: -10vh;
  width: 55vw;

  h2 {
    text-align: center;
    margin-bottom: 5vh;
  }

  #cardBody {
    background-color: transparent;
    color: white;
  }

  @media screen and (max-width: 1900px) {
    h2 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 992px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 790px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 3.5vw;

    h2 {
      font-size: 6vw;
    }
  }
`;

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;

  @media screen and (max-width: 1900px) {
    gap: 10rem;
  }

  @media screen and (max-width: 1300px) {
    gap: 6rem;
  }

  @media screen and (max-width: 1200px) {
    gap: 3rem;
  }
  @media screen and (max-width: 1100px) {
    gap: 6rem;
  }
  @media screen and (max-width: 990px) {
    gap: 4rem;
  }
  @media screen and (max-width: 790px) {
    padding: 0 3vw 0 5vw;
    gap: 10vw;
  }
  @media screen and (max-width: 600px) {
    gap: 8vw;
  }
  @media screen and (max-width: 450px) {
    gap: 4vw;
  }
  @media screen and (max-width: 400px) {
    gap: 2vw;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 1900px) {
    transform: scale(1.8);

    &:hover {
      transform: scale(1.9);
    }
  }
  @media screen and (max-width: 1300px) {
    transform: scale(1.5);

    &:hover {
      transform: scale(1.6);
    }
  }

  @media screen and (max-width: 1200px) {
    transform: scale(1.2);

    &:hover {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 990px) {
    transform: scale(1.1);

    &:hover {
      transform: scale(1.2);
    }
  }
  @media screen and (max-width: 690px) {
    transform: scale(1);

    &:hover {
      transform: scale(1.1);
    }
  }
  @media screen and (max-width: 450px) {
    transform: scale(0.9);

    &:hover {
      transform: scale(1);
    }
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.7);

    &:hover {
      transform: scale(0.8);
    }
  }
`;

const Skills = () => {
  const skills = [
    { name: "HTML", icon: IconHTML },
    { name: "CSS", icon: IconCSS },
    { name: "JavaScript", icon: IconJavascript },
    { name: "React.js", icon: IconReact },
    { name: "Express.js", icon: IconExpress },
    { name: "PostgreSQL", icon: IconPostgre },
    { name: "MySQL", icon: IconMySQL },
    { name: "MongoDB", icon: IconMongo },
    { name: "NodeJS", icon: IconNodeJs },
    { name: "Git", icon: IconGit },
  ];

  return (
    <StyledContainer>
      <h2>Skills</h2>
      <StyledSkills>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </Skill>
        ))}
      </StyledSkills>
    </StyledContainer>
  );
};

export default Skills;
