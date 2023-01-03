import "./Hero.css";
import HeaderSocial from "./HeaderSocial";
import Typical from "react-typical";
const Hero = () => {
    return(
        <section className="hero mt-5" id="home">
            <div className="heroContainer">
                <h4>Hello, I`m</h4>
                <h1>Monsef Amzaouri</h1>
                <p className="fs-4">
                    
                    <Typical 
                        loop={Infinity}
                        wrapper="i"
                        steps={[
                             ` I am web developer 💻`,
                            1000,
                            `REACT / LARAVEL 👨‍💻`,
                            1000,
                        ]}
                        />
                </p>
                <button type="button" class="btn btn-primary me-4">Download CV</button>
                <button type="button" class="btn btn-primary">Let`s Talk</button>
                <HeaderSocial />
                <div className="me d-flex justify-content-center align-self-center">
                    <img src="image/me1.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default Hero