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
  margin-top: -8vh;
  width: 50vw;

  h2 {
    text-align: center;
    margin-bottom: 10vh;
    font-size: 4vw;
  }

  #cardBody {
    background-color: transparent;
    color: white;
  }

  @media screen and (max-width: 2000px) {
    h2 {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 1400px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 1100px) {
    @media (min-height: 1300px) {
      margin-top: -3vh;
      h2 {
        margin-bottom: 5vh;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 3.5vw;
    }
  }

  @media screen and (max-width: 900px) {
    @media (min-height: 1000px) {
      margin-top: -1vh;
      h2 {
        margin-bottom: 4vh;
      }
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
  @media screen and (max-width: 610px) {
    h2 {
      font-size: 7vw;
      margin-bottom: 5vh;
    }
  }
`;

const StyledSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8vw;
  justify-content: center;

  @media screen and (max-width: 2000px) {
    gap: 7vw;
  }
  @media screen and (max-width: 1440px) {
    gap: 7vw;
  }
  @media screen and (max-width: 1400px) {
    gap: 6vw;
  }
  @media screen and (max-width: 1300px) {
    @media (min-height: 1000px) {
      gap: 7vw;
    }
    @media (min-height: 800px) {
      gap: 5vw;
    }
    @media (min-height: 700px) {
      gap: 4.5vw;
    }
  }

  @media screen and (max-width: 1000px) {
    gap: 3vw;
  }
  @media screen and (max-width: 790px) {
    padding: 0 3vw 0 5vw;
    gap: 10vw;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease-in-out;
  transform: scale(2.4);

  &:hover {
    transform: scale(3);
  }

  @media screen and (max-width: 2000px) {
    transform: scale(1.7);

    &:hover {
      transform: scale(1.9);
    }
  }
  @media screen and (max-width: 1600px) {
    transform: scale(1.6);

    &:hover {
      transform: scale(1.8);
    }
  }
  @media screen and (max-width: 1440px) {
    transform: scale(1.5);

    &:hover {
      transform: scale(1.7);
    }
  }

  @media screen and (max-width: 1400px) {
    transform: scale(1.4);

    &:hover {
      transform: scale(1.7);
    }
  }
  @media screen and (max-width: 1300px) {
    transform: scale(1.2);

    &:hover {
      transform: scale(1.4);
    }

    @media (max-height: 720px) {
      transform: scale(1.15);

      &:hover {
        transform: scale(1.4);
      }
    }
  }

  @media screen and (max-width: 1100px) {
    transform: scale(0.9);

    &:hover {
      transform: scale(1.2);
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
