import styled from "styled-components";
import Header from "./components/Header";
import ProfileComponent from "./components/ProfileComponent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css'
import { Fade } from "react-awesome-reveal";


function App() {
  return (
    <Container>
      <Banner>
        <Fade>

          <Header />
          <ProfileComponent />
        </Fade>
      </Banner>
      <Skills />
      <Project>

        <Projects />
      </Project>
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Banner = styled.div`
  background: linear-gradient(159deg , rgb(45,45,58) 0% , rgb(43,43,53) 100%);
  min-height: 100vh;
  padding-bottom: 2rem;
`;

const Project = styled.div`
  background: linear-gradient(159deg , rgb(45,45,58) 0% , rgb(43,43,53) 100%);
`;