import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Col, Row} from "react-bootstrap"
import "./Experience.css"
const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
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
                            <p>I possess a diverse range of skills that enable me to develop 
                              high-quality web applications.<br /> Here are some of my key skills:
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true} // Enable autoplay
                                autoPlaySpeed={2000} // Set autoplay speed to 2000 milliseconds (2 seconds)
                                className="skill-slider"
                            >
                            <div className="item">
                                <div class="loader"><p>80%</p></div>
                                <h5>Front End React</h5>
                            </div>
                            <div className="item">
                                <div class="loader"><p>90%</p></div>
                                <h5>Back End Laravel</h5>
                            </div>
                            <div className="item">
                                <div class="loader"><p>90%</p></div>
                                <h5>Search Engine Optimization</h5>
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