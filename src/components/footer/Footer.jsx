import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaArrowCircleDown,
    FaArrowDown,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    Hello everyone, welcome to FILM-EE 
                    which is a personalized movie and TV Show recommendation app.
                    The app has been designed with the help of <b>Vite+ReactJS</b> for
                    the app has been designed as the final project for the <br></br>
                    <b>Celebal Summer Internship</b>.
                    <br></br>
                    By Aryan Prasad of KIIT University.  
                    <br></br>
                    <br></br>
                    GET IN TOUCH.... CLICK BELOW<FaArrowDown/>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.instagram.com/_photophile_ap/"><FaInstagram /></a>
                    </span>
                    <span className="icon">
                    <a href="https://www.linkedin.com/in/aryan-prasad-b3323a24a/"><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
