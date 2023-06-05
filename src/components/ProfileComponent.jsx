import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFileText,
} from "react-icons/ai";
import styled from "styled-components";
import frontphoto from "../assets/images/frontphoto.png";
import { Slide } from "react-awesome-reveal";

const ProfileComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello World, <span className="secondary">I'am</span>
          </h4>
          <h1 className="secondary"> Shivam Jha </h1>
          <h3>Software Engineer</h3>
          <p>
          Passionate full stack developer with a love for teamwork, embracing new tech to create innovative solutions.
          </p>
          <button>Hire Me!</button>
          <Social>
            <p>Check Out My</p>
            <div className="socialicons">
              <span>
                <a
                  href="https://www.instagram.com/shivamjhaaa/"
                  target="__blank"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/shivamjhaaa/"
                  target="__blank"
                >
                  <AiOutlineLinkedin />
                </a>
              </span>
              <span>
                <a
                  href="https://drive.google.com/file/d/1ZMrgQSKArMtRiFG44G2MmeRvSiK6YoKY/view?usp=drive_link"
                  target="__blank"
                >
                  <AiOutlineFileText />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>

      <Slide direction="right">


      <Profile>
        <img src={frontphoto} alt="Shivam Jha" />
      </Profile>
      </Slide>
    </Container>
  );
};

export default ProfileComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 763px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Rock Salt", cursive;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding-bottom: 1.2rem;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9590);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
  }
  .socialicons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 2.3rem;
      height: 2rem;
      //clip path maker : https://bennettfeely.com/clippy/
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      font-size: 1.4rem;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20rem;
    filter: drop-shadow(0px 10px 10px #01be9551);
    transition: transform 400ms ease-in-out;
    :hover {
      transform: translateY(-10px);
    }
    @media (max-width: 700px) {
      width: 15rem;
    }
    @media (max-width: 600px) {
      width: 80%;
    }
  }
`;
