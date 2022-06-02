import React from "react";
import { Link } from "react-router-dom";

export function MealItem(props) {

    return (
        <li className="meal-item">
            <h4>{props.mealTitle}</h4>
            <p>{props.mealPrice} kr.</p>
            <p>{props.locationRestaurant}</p>
            <Link to={`/meals/${props.id}`}>
                <button>Book meal</button>
            </Link>
        </li>
    );
}
