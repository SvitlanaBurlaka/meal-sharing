import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="navigation-container">
            <nav >
                <Link to="/meals" className="nav-link">
                    Meals
                </Link>
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
                <Link to="/blog" className="nav-link">
                    Blog
                </Link>
            </nav>
            <div className="description-header">
                <h4>Your meal-sharing app!</h4>
                <p>Choose your meal</p>
            </div>
        </div>
    );
}
