import React from "react";
import { MainPageComponent } from "../Main/MainPageComponent";
import "./mainPage.css";
import MainImage from "./MainImage.jpg";
export function Home() {
    return (
        <div className="main-container">
            <div className="left-section">
                <MainPageComponent />
            </div>
            <div className="right-section">
                <img src={MainImage} alt="main-image" />
            </div>
        </div>
    )
}
