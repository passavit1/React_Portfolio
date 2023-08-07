import React from "react";
import styled from "styled-components";
import resumeIMG from "../../items/resume.png";
import IconFacebook from "../../items/facebook.svg";
import IconTwitter from "../../items/twitter.svg";
import IconGithub from "../../items/github.svg";
import IconLinkedin from "../../items/linkedin.svg";

const StyledContainer = styled.div`
  width: 60vw;
  margin-top: -15vh;
  color: white; /* Set text color to white */

  h2 {
    text-align: center;
    margin-bottom: 3vh;
  }

  .content {
    display: flex;

    .resume {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 45%;
        margin-bottom: 2vh;
        border: 2px solid #ddd;
        border-radius: 8px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
      }

      a {
        margin-top: 1rem;

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #0056b3;
          }
        }
      }
    }

    .education {
      width: 10%;
      .contact {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin-left: -10vw;

        gap: 2rem;

        a {
          img {
            width: 4rem;
            height: 4rem;
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
  }
`;

const Contract = () => {
  const resumePDFPath = "../../items/Resume-Passavit.pdf";

  return (
    <StyledContainer>
      <h2>Education & Contract </h2>
      <div className="content">
        <div className="resume">
          <img src={resumeIMG} alt="" />
          <a href={resumePDFPath} download>
            <button>Download My Resume in PDF</button>
          </a>
        </div>
        <div className="education">
          <div className="contact">
            <a
              href="https://web.facebook.com/passavit.gunn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconFacebook} alt="" />
            </a>
            <a
              href="https://twitter.com/PassavitP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconTwitter} alt="" />
            </a>
            <a
              href="https://github.com/passavit1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconGithub} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/passavit-maicharoen-b668421b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IconLinkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Contract;
