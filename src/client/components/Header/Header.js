import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "./logoHeader.jpg";
import "./header.css";

export default function Header() {
    return (
        <div className="navigation-container">
            <nav>
                <img className="logo-header" src={logoHeader} alt="Main-logo" />
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/meals" className="nav-link">
                    Meals
                </Link>
                <Link to="/blog" className="nav-link">
                    Blog
                </Link>
                <div className="description-header">
                    <h4>Your meal-sharing app!</h4>
                    <p>Choose your meal</p>
                </div>
            </nav>
        </div>
    );
}
