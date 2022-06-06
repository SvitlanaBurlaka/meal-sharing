import React from "react";
import BannerForBlog from "./BannerForBlog.jpg";
import "./blog.css";
export function Blog() {
    return (
        <div className="blog-container">
            <div className="blog-img">
                <img className="blog-img" src={BannerForBlog} alt="blog-image" />
            </div>
            <div className="blog-text">
                <h2 className="description-header">
                    Here you can read how you avoid foodwaste!
                </h2>
                <ul className="text-food-waste">
                    <li>
                        <h4 className="blog-h"> Buy only what you need</h4>
                        <p>
                            Plan your meals. Make a shopping list and stick to it, and avoid
                            impulse buys. Not only will you waste less food, you`ll also save
                            money!
                        </p>
                    </li>
                    <li>
                        <h4 className="blog-h">Love your leftovers</h4>
                        <p>
                            If you don`t eat everything you make, freeze it for later or use
                            the leftovers as an ingredient in another meal.
                        </p>
                    </li>
                    <li>
                        <h4 className="blog-h">Respect food</h4>
                        <p>
                            Food connects us all. Re-connect with food by knowing the process
                            that goes into making it. Read about food production and get to
                            know your farmers.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
