import React from "react";
import { MainPageComponent } from "../Main/MainPageComponent";
import "./mainPage.css";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div className="main-container" >
                <div className="container-list">
                    < p className="text-home-page">
                        This is a digital platform where owners of restaurants are saling their
                        food for quite good prices! If you like some food , but you don`t have
                        enough money whether you think its just not worth it, so this app
                        exactly for you!
                    </p>
                    <MainPageComponent />
                    <Link to="/meals"><button className="book-meal">Book meal</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
