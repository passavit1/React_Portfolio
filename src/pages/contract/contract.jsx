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
    font-size: 2.5vw;
  }

  .content {
    display: flex;

    .resume {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 55%;
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
          font-size: 1.2vw;
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

        margin-left: -5vw;

        gap: 2rem;

        a {
          img {
            width: 5vw;
            height: 5vw;
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 3vw;
    }

    @media (min-height: 1000px) {
      .content {
        .resume {
          img {
            width: 70%;
          }

          a {
            button {
              font-size: 1.5vw;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    @media (min-height: 1300px) {
      margin-top: -5vh;
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 3vw;
    }
  }

  @media screen and (max-width: 900px) {
    @media (min-height: 1000px) {
      margin-top: -5vh;

      .content {
        .resume {
          img {
            width: 70%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 790px) {
    margin: unset;
    height: 80vh;
    width: 95vw;
    overflow: scroll;

    .content {
      position: relative;
      display: flex;
      justify-content: center;

      .resume {
        width: 90vw;

        a {
          button {
            width: 40vw;
            font-size: 2vw;
          }
        }
      }

      .education {
        position: absolute;
        right: 5vw;
        top: 15vh;
        .contact {
          margin: unset;
          margin-left: 2vw;
          margin-top: -2vh;

          a {
            img {
              width: 7vw;
              height: 7vh;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    h2 {
      font-size: 4vw;
    }
    .content {
      .education {
        top: 8vh;
        right: 3vw;
      }

      .resume {
        img {
          width: 70%;
        }
      }
    }
  }
  @media screen and (max-width: 550px) {
    .content {
      .education {
        top: 5vh;
      }
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 6vw;
      margin-bottom: 2vh;
    }

    .content {
      flex-direction: column;

      .resume {
        height: 100%;
        width: 100%;

        img {
          width: 80%;
        }

        a {
          button {
            font-size: 3vw;
            width: 60vw;
          }
        }
      }
      .education {
        position: relative;
        top: 0;
        right: 0;
        width: 100%;

        .contact {
          flex-direction: row;
          margin: unset;
          justify-content: center;

          a {
            img {
              width: 10vw;
            }
          }
        }
      }
    }

    @media (max-height: 750px) {
      h2 {
        margin-bottom: 8vh;
      }

      .content {
        .resume {
          margin-bottom: 3vh;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    .content {
      .education {
        top: 3vh;
      }
    }

    @media (max-height: 900px) {
      .content {
        height: auto !important;
      }
    }
    @media (max-height: 800px) {
      h2 {
        margin-bottom: 3vh;
      }
    }
  }
`;

const Contract = () => {
  const resumePDFPath = "../../items/Resume-Passavit.pdf";

  return (
    <StyledContainer>
      <h2>Education & Contact </h2>
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
