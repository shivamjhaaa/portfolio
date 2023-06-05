import React from "react";
import { Slide } from "react-awesome-reveal";
import {
  AiOutlineAim,
  AiOutlineArrowUp,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styled from "styled-components";

const Contact = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container id="contact">
        <Profile>
      <Slide direction="left">
          <h1 className="secondary">Contact</h1>
          <div className="location">
            <h3>Location:</h3>
            <p>
              <AiOutlineAim />
              Mumbai , Maharashtra , India
            </p>
          </div>

          <div className="contactme">
            <h3>Contact Me directly:</h3>
            <div>
              <span>
                <AiOutlinePhone />
              </span>
              <a href="tel:+919372704507">+91 9372704507</a>
            </div>
            <div>
              <span>
                <AiOutlineMail />
              </span>
              <a href="mailto:imshivamj@gmail.com">imshivamj@gmail.com</a>
            </div>
          </div>

          <div className="links">
            <h3>Check My profiles</h3>
            <span>
              <a href="mailto:imshivamj@gmail.com">
                <AiOutlineGithub />
              </a>
              <a href="mailto:imshivamj@gmail.com">
                <AiOutlineLinkedin />
              </a>
              <a href="mailto:imshivamj@gmail.com">
                <AiOutlineInstagram />
              </a>
              <a href="mailto:imshivamj@gmail.com">
                <AiOutlineWhatsApp />
              </a>
            </span>
          </div>
      </Slide>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Profile>

        <Form>
      <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <AiOutlineUser />
              </span>
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="email">
              <span>
                <AiOutlineMail />
              </span>
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="message">
              <span className="messageicon">
                <AiOutlineMessage />
              </span>
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Message.."
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
      </Slide>
        </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: 763px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Profile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    font-size: 2rem;
  }
  .location {
    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  .contactme {
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;

        :hover {
          color: orange;
        }
      }
    }
  }

  .links {
    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding-top: 0.5rem;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        text-decoration: none;
        color: white;
        background-color: #0f0404;
        font-size: 1.5rem;

        :hover {
          background-color: #01be96;
        }
      }
    }
  }
`;

const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;

  :hover {
    filter: drop-shadow(0px 8px 6px #01be9551);
  }
`;

const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding: 0.7rem;
  }
  form {
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: #191923;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .messageicon {
        align-items: flex-start;
        padding-top: 1rem;
      }
    }
    button {
      width: 5rem;
      height: 2rem;
      cursor: pointer;
      background-color: #01be96;
      /* color: #fff; */
      border: none;
      font-weight: 700;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);

      :hover {
        filter: drop-shadow(0px 8px 6px #01be9551);
      }
    }
  }
`;
