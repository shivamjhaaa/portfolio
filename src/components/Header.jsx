import React from "react";
import styled from "styled-components";
import { IoSkull } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [bar, setBar] = useState(false);
  return (
    <Container bar={bar}>
      <Logo>
        <span className="secondary">
          <IoSkull />
        </span>
        <h1>SJ</h1>
      </Logo>
      <Nav bar={bar}>
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#skills">Skills</a>
        </span>
        <span>
          <a href="#projects">Projects</a>
        </span>
        <span>
          <a href="#contact">Contact Me</a>
        </span>
      </Nav>
      <div className="bars" onClick={() => setBar(!bar)}>
        <div className="bar"></div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  .bars{
    display: none;
  }

  @media (max-width: 763px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .bar {
        z-index: 100;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        transition: all 400ms ease-in-out;
        ::before,
        ::after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }
        ::before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }
        ::after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.5rem;
    color: #01be96;
  }
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Rock Salt', cursive;
  }
`;
const Nav = styled.div`
  span {
    margin-left: 1rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      ::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #01be96;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover::before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        /* opacity: 0.7; */
        color: #01be96;
      }
    }
  }

  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: black;
    opacity: 0.9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    gap: 2rem;
    //to hide
    height: ${props => props.bar ? '100vh' : 0};
    transition: all 400ms ease-in-out;
    overflow: hidden;
    z-index: 99;
  }
`;
