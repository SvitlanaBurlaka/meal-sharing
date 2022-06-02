import React from "react";

export function MainPageMealItem(props) {
    return (
        <li >
            <h4 className="meal-title">{props.mealTitle}</h4>
            <p className="meal-description">{props.mealDescription}</p>
        </li>
    );
}