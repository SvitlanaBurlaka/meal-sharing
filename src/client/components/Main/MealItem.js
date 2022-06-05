import React from "react";
import { Link } from "react-router-dom";

export function MealItem(props) {
    return (
        <li className="meal-item">
            <h4>{props.mealTitle}</h4>
            <p className="meal-price">{props.mealPrice} kr.</p>
            <p>{props.locationRestaurant}</p>
            <Link to={`/meals/${props.id}`}>
                <button className="meal-button">Book meal</button>
            </Link>
        </li>
    );
}
