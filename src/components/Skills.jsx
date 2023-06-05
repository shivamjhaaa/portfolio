import React from "react";
import styled from "styled-components";
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import sass from '../assets/icons/sass.png'
import react from '../assets/icons/science.png'
import { Slide, Zoom } from "react-awesome-reveal";

const Skills = () => {
  return (
    <Container id="skills">
      <Slide direction="left">
        
      <h4>
        Tech <span className="secondary">Stack</span>
      </h4>
      </Slide>

      <legend></legend>
      <Zoom duration={2000}>


      <TechStack>
        
          
          <span><img src={html} alt="HTML" /></span>
          <span><img src={css} alt="css" /></span>
          <span><img src={js} alt="JavaScript" /></span>
          <span><img src={react} alt="React" /></span>
          <span><img src={sass} alt="sass" /></span>
        
      </TechStack>
      </Zoom>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;

  h4 {
    font-size: 1.5rem;
  }
  legend {
    border: 1.5px solid #fff;
    height: 3rem;
  }

  @media (max-width: 763px) {
    width: 90%;
    h4{
      font-size: 1.2rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
    legend{
      height: 0;
      width: 10rem;
      margin-bottom: 2rem;
    }
  }

`;

const TechStack = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 2rem;
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3.5rem;
      width: 3.5rem;
      
      border-radius: 50%;
      background-color: #fff;

      :hover{
        transform: scale(1.2);
        transition: transform 400ms ease-in-out;
      }

    }
    img{
      width: 2rem;
    }

    @media (max-width: 600px) {
      flex-wrap: wrap;
      margin-left: 0;
      gap: 1.5rem;
    span{
      height: 2.5rem;
      width: 2.5rem;
    }
    img{
      width: 1.4rem;
    }
  }

`;
