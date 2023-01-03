import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import "./Portfolio.css";
import ProjectCard from "./ProjectCard";

const myProjects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img1.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "image/project-img2.png",
  },
];

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              aliquid eveniet error, nulla dicta impedit quidem quis
              exercitationem iure vero, accusantium molestias natus maxime
              dolore mollitia laudantium quae consequatur unde.
            </p>
            { <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/*<Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="First">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>*/}
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
