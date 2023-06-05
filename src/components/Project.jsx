import React from 'react'
import styled from 'styled-components'

const Project = (props) => {
    const type = props.type;
    const imgSrc = props.imgSrc;
    const title = props.title;
    const description = props.description;
    const githubCode = props.githubCode;
    const link = props.link;

  return (
    <Container type={type}>
        <ProjectSnap>
            <img src={imgSrc} alt="" />
        </ProjectSnap>

        <ProjectInfo>
            <h4>{title}</h4>
            <p>{description}</p>
            <Buttons>
                <a href={githubCode} target='_blank'>Code</a>
                <a href={link} target='_blank'>Live Demo</a>
            </Buttons>
        </ProjectInfo>

    </Container>
  )
}

export default Project

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.type === '0' ? 'row' : 'row-reverse'};
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    margin-top: 3rem;
    min-height: 20rem;
    border-radius: 1rem;
    background-color: #fff;
    filter: drop-shadow(0px 10px 10px #fff);

    @media (max-width: 1024px) {
        flex-direction: column;
        margin: 0 auto;
        margin-top: 3rem;
        max-width: 500px;
    }

`

const ProjectSnap = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
    flex: 3;
    filter: drop-shadow(0px 10px 10px #01be9551);
    img{
        width: 100%;
        max-width: 600px;
        border-radius: 1rem;
    }
`

const ProjectInfo = styled.div`
    color: black;
    flex: 2;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    margin-top: 1rem;
`