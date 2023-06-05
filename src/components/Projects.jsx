import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { Fade, Slide } from "react-awesome-reveal";
import { myProjects } from "../assets/myProjects";

const Projects = () => {
  return (
    <Container id="projects">
      <Fade duration={4000}>
        <h1>
          Recent <span className="secondary">Projects</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Fade>

      <ProjectCard>
        {myProjects.map((i,index) => (
          <Slide direction={index % 2 ? "left" : "right"}>
            <Project
              type={index % 2 ? '0' : "1"}
              key={i.title}
              title={i.title}
              description={i.description}
              link={i.link}
              imgSrc={i.imgSrc}
              githubCode={i.githubCode}
            />
          </Slide>
        ))}
      </ProjectCard>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 3rem;
  text-align: center;
`;

const ProjectCard = styled.div`
  padding-bottom: 3rem;
`;
