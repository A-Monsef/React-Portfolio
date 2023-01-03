import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Col, Row} from "react-bootstrap"
import "./Experience.css"
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, sapiente!</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <div class="loader"><p>85%</p></div>
                                <h5>Front End Developer</h5>
                            </div>
                            <div className="item">
                                <div class="loader"><p>90%</p></div>
                                <h5>Back End Developer</h5>
                            </div><div className="item">
                                <div class="loader"><p>90%</p></div>
                                <h5>Full Stack Developer</h5>
                            </div>
                            <div className="item">
                                <div class="loader"><p>60%</p></div>
                                <h5>SEO</h5>
                                
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Skills