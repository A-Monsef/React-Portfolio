import "./About.css";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="text-center mb-2">Get to know</h2>
                <h3 className="text-center">About Me</h3>
                <div className="row justify-content-center">
                    <div >
                        <div className="aboutContent text-center">
                            <p>
                                Welcome to my portfolio! I am excited to showcase my skills and experience in the field of web development.
                                I am constantly seeking new challenges and opportunities to further enhance my skills and contribute to impactful projects.
                                Please feel free to explore my portfolio to see examples of my work and learn more about my experience.
                            </p>
                            <button type="button" class="btn btn-primary">
                                <a href="#connect" className="text-decoration-none text-dark">Let's Talk</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


