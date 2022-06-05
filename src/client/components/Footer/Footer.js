import React from "react";
import "./Footer.css";
import fLogo from "./images/fLogo.jpg";
import instaLogo from "./images/instaLogo.jpg";
import twitterLogo from "./images/twitterLogo.jpg";
import { Link } from "react-router-dom";
export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div>
                    <Link to="/"><img className="logo" src={fLogo} alt="facebook-logo" /></Link>
                    <Link to="/"><img className="logo" src={instaLogo} alt="insta-logo" /></Link>
                    <Link to="/"><img className="logo" src={twitterLogo} alt="twitter-logo" /></Link>
                </div>
                <div className="contacts-container">
                    <h3>OUR CONTACTS</h3>
                    <p className="contacts"> myEmail@gmail.com</p>
                    <p className="contacts"> 000 000 000</p>
                    <p className="contacts"> 9am - 6am</p>
                    <p className="contacts">Copenhagen Street 4</p>
                </div>
                <div className="footer-navigation">
                    <h3>NAVIGATION</h3>
                    <p> <Link to="/" className="nav-link-footer">
                        HOME
                    </Link></p>
                    <p> <Link to="/meals" className="nav-link-footer">
                        MEALS
                    </Link></p>
                    <p>  <Link to="/about" className="nav-link-footer">
                        ABOUT
                    </Link></p>
                    <p><Link to="/blog" className="nav-link-footer">
                        BLOG
                    </Link></p>
                </div>
            </div>
        </footer>

    )
}