import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  font-size: 1.3rem;
  font-family: monospace;

  .header {
    font-size: 5.5rem;
    margin-top: -7vw;
    margin-bottom: 1vw;

    animation: text-shadow-pop-br 3s both;

    @keyframes text-shadow-pop-br {
      0% {
        text-shadow: 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555, 0 0 #555,
          0 0 #555, 0 0 #555;
        transform: translateX(0) translateY(0);
      }
      100% {
        text-shadow: 1px 1px #555, 2px 2px #555, 3px 3px #555, 4px 4px #555,
          5px 5px #555, 6px 6px #555, 7px 7px #555, 8px 8px #555;
        transform: translateX(-8px) translateY(-8px);
      }
    }
  }

  .center {
    text-align: left;
    margin-bottom: 1.5vw;
    text-indent: 4vw;
    font-size: 1.3rem;

    div {
      margin-bottom: 1.5vw;
    }

    div:first-child {
      width: 43ch;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 3s steps(43);
      @keyframes typing {
        from {
          width: 0;
        }
      }
    }
    div:nth-child(2) {
    }
    div:last-child {
    }
  }

  .footer {
    width: 60ch;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 6s steps(60) 8s, blink 0.5s step-end infinite alternate,
      fadeIn 0s forwards 8s;
    opacity: 0;
    @keyframes typing {
      from {
        width: 0;
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  }
`;

const Welcome = () => {
  return (
    <StyledContainer>
      <div className="header">WELCOME.</div>
      <div className="center">
        <div>Hello, my name is Passavit Maicharoen.</div>
        <div>
          I have a strong passion for web development and am currently pursuing
          a career in software development.
        </div>
        <div>
          I am dedicated to creating dynamic and user-friendly web applications,
          and am always eager to learn new technologies and programming
          languages to enhance my skills.
        </div>
      </div>
      <div className="footer">
        Thank you for considering me for your web development needs.
      </div>
    </StyledContainer>
  );
};

export default Welcome;
