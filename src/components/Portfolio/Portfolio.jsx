import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    onSnapshot(collection(firestore, "projects"), (querySnapshot) => {
      const firebaseProjects = [];
      querySnapshot.forEach((project) => {
        firebaseProjects.push(project.data());
      });
      setProjects(firebaseProjects);
    });
  }, []);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Welcome to my project portfolio! Here, 
              I present a selection of projects that showcase my skills.
            </p>
            { <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container> }
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Portfolio;
