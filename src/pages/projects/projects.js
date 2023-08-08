import React, { useEffect } from "react";
import styled from "styled-components";
import Splitting from "splitting";
import cryptoWatcher from "../../items/CryptoWatcher.png";
import TrueThammasat from "../../items/TrueThammasat.png";

const StyledContainer = styled.div`
  .container {
    display: flex;
    width: 60vw;
  }

  .card {
    position: relative;
    overflow: hidden;
    aspect-ratio: 9/12;
    display: flex;
    flex-direction: column;
    margin-right: 3vw;
    margin-bottom: 3vh;
    width: 25vw;

    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.3) 0 5vw 6vw -8vw,
      rgba(255, 255, 255, 0) 0 4.5vw 5vw -6vw,
      rgba(50, 50, 80, 0.5) 0px 4vw 8vw -2vw,
      rgba(0, 0, 0, 0.8) 0px 4vw 5vw -3vw;

    transition: box-shadow 1s cubic-bezier(0.66, 0.08, 0.19, 0.97);

    & > * {
      z-index: 2;
    }

    & > img {
      z-index: 0;
      transition: all 0.8s cubic-bezier(0.66, 0.08, 0.19, 0.97);
    }

    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 50%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.8);
      position: absolute;
      transform-origin: left;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.66, 0.08, 0.19, 0.97);
      z-index: 1;
    }

    &::after {
      transition-delay: 0.15s;
      top: 50%;
    }

    &:hover,
    &:focus {
      box-shadow: white 0 5vw 6vw -9vw, white 0 5.5vw 5vw -7.5vw,
        rgba(50, 50, 80, 0.5) 0px 4vw 8vw -2vw,
        rgba(0, 0, 0, 0.8) 0px 4vw 5vw -3vw;

      &::before,
      &::after {
        transform: scaleX(1);
      }

      & h2 .char,
      & p .word {
        opacity: 1;
        transform: translateY(0);
        color: inherit;
      }

      & h2 .char {
        transition-delay: calc(0.1s + var(--char-index) * 0.05s);
      }

      & p .word {
        transition-delay: calc(0.1s + var(--word-index) * 0.015s);
      }

      & img {
        transform: scale(1.1);
      }
    }

    &:nth-of-type(1) {
      color: coral;
    }
  }

  .text {
    position: absolute;
    inset: 1.5vw;
    top: auto;
  }

  h2 {
    font-size: 2vw;
    font-size: clamp(20px, 2vw, 40px);
    font-weight: 800;
    margin-bottom: 1em;
  }

  p {
    font-size: 12px;
    font-size: clamp(10px, 1.25vw, 14px);
    line-height: 1.4;
    text-align: justify;
    margin-top: 0.2em;
    margin-bottom: 0;
  }

  h2 .char,
  p .word {
    color: white;
    display: inline-block;
    opacity: 0;
    position: relative;
    transform: translateY(20px);
    transition-property: transform, opacity, color;
    transition-timing-function: cubic-bezier(0.38, 0.26, 0.05, 1.07);
    transition-duration: 0.75s, 0.75s, calc(0.75s * 2);
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    border-radius: 7px;
  }

  .img2 {
    object-position: center;
  }

  // layout stuff

  main {
    grid-template-columns: 1fr;
    grid-template-rows: 60px;
    grid-gap: 2em;

    @media screen and (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: min-content 1fr;
    }
  }

  h1 {
    color: #5b6377;
    font-weight: 100;

    @media screen and (min-width: 600px) {
      grid-column: 1/3;
    }
  }

  body,
  main {
    display: grid;
    place-items: center;
  }

  body,
  html {
    color: white;
    background: #333844;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-family: "Open Sans", sans-serif;
  }

  body {
    padding: 1em 0 3em;
    min-height: calc(100vh - 4em);
  }

  @media screen and (max-width: 790px) {
    .container {
      width: 100vw;
      justify-content: center;

      .card {
        margin: unset;
        width: 40vw;
      }

      a:first-child {
        margin-right: 5vw;
      }
    }

  @media screen and (max-width: 600px) {
    .container {
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow: scroll;
      
      

      .card {
        margin: unset;
        width: 60vw;
      }

      a:first-child {
        margin:unset;
        margin-bottom : 2vh;
      }
    }
  }
`;

const Projects = () => {
  useEffect(() => {
    Splitting();
    setTimeout(() => {
      document.querySelector(".card").focus();
    }, 1500);
  }, []);

  return (
    <StyledContainer>
      <div className="container">
        <a
          href="https://passavit1.github.io/CryptoWatcher/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card" tabindex="0">
            <img src={cryptoWatcher} alt="" srcset="" />
            <div className="text">
              <h2 data-splitting="">Crypto Watcher</h2>
              <p data-splitting="">
                Web application that fetches market data, calculates
                profit/loss, provides cryptocurrency news, and lists trending
                coins.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.truethammasat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card">
            <img src={TrueThammasat} alt="" srcset="" className="img2" />
            <div className="text" style={{ color: "#56ffe5" }}>
              <h2 data-splitting="">True Thammasat</h2>
              <p data-splitting="">
                "Website that displays events scheduled for the current month.
                It provides information about various events, including their
                dates and brief descriptions. Users can click on the events to
                get more details or to visit external websites for additional
                information or registration."
              </p>
            </div>
          </div>
        </a>
      </div>
    </StyledContainer>
  );
};

export default Projects;
