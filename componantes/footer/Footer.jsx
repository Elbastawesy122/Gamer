import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './Footer.css';

function Footer(){
    return(
        <>
        <div className="footer">
            <div className={`ele`}>
            <h1>Platform</h1>
            <a href="#">All Games</a>
            <a href="#">PC (Windows)</a>
            <a href="#">Web Browser</a>
            </div>
            <div className={`ele`}>
            <h1>Genre</h1>
            <a href="#">Shooter</a>
            <a href="#">Sports</a>
            <a href="#">Card Game</a>
            <a href="#">Strategy</a>
            <a href="#">Fighting</a>
            </div>
            <div className="conc">
                <div className="loc">
                  <FaLocationDot className="location"/>
                  <p>Egypt, Dakahlia, Minyat Al-Nasr</p>
                </div>
                <div className="sochyal">
                    <a href="" className="fac"><FaFacebook /></a>
                    <a href="" className="insta"><FaInstagram /></a>
                    <a href="" className="whats"><FaWhatsapp /></a>
                </div>
            </div>
        </div>
        <div className="made">
            <p>MADE BY @El_BASTAWESY IN 2024</p>
        </div>
        </>
    )
}
export default Footer;