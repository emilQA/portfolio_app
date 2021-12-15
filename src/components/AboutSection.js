import React from "react";
import home1 from "../img/home1.png";
// import styled from "styled-components";
import {About, Description, Hide, Image} from "../styles";
// import {motion} from "framer-motion";


const AboutSection = () => {

    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come </h2>
                    </Hide>
                    <Hide>
                        <h2>ture.</h2>
                    </Hide>
                </div>
                <p>Contact us for any Photography ideas that you have.We have professionals with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="gwc"/>
            </Image>
        </About>
    )
}



export default AboutSection;