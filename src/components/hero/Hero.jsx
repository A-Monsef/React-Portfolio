import "./Hero.css";
import HeaderSocial from "./HeaderSocial";
import Typical from "react-typical";
import React, { useState } from 'react';

const Hero = () => {

    const [imageURL, setImageURL] = useState("https://firebasestorage.googleapis.com/v0/b/fir-react-portfolio.appspot.com/o/me1.png?alt=media&token=957d564e-60b7-48d3-8f6d-040d90648c6f");
    
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
                <button type="button" className="btn btn-primary me-4">
                    <a href="/Amzaouri%20Lebenslauf.pdf" className="text-decoration-none text-dark" download>Download CV</a>
                </button>
                <button type="button" class="btn btn-primary">
                    <a href="#connect" className="text-decoration-none text-dark">Let's Talk</a>
                    </button>
                <HeaderSocial />
                <div className="me d-flex justify-content-center align-self-center mx-auto">
                    <img src={imageURL} alt="My Image" />
                </div>
            </div>
        </section>
    )
}
export default Hero