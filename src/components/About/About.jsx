import "./About.css"
const About = () => {
    return(
        <section className="about mt-5" id="about">
            <h5 className="text-center">Get to know</h5>
            <h2 className="text-center">About Me</h2>
            <div className="imageText row d-flex justify-content-center align-items-start mt-5 mx-auto gx-5">
                <div className="imageAbout col-3">
                    <img className="img-fluid" src="image/about.png" alt="" />
                </div>
                <div className="textAbout col-7">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam consectetur reprehenderit neque id rem corrupti amet soluta. Temporibus eum facilis nobis velit molestiae quas ipsum nostrum ullam, provident, inventore itaque quis dolores nemo? Reprehenderit modi nesciunt magnam. Saepe, ab.</p>
                <button type="button" class="btn btn-primary mb-4">Let`s Talk</button>
                </div>
            </div>
        </section>
    )
}
export default About