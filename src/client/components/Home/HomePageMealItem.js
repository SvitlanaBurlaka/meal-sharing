import React from "react";

export function HomePageMealItem(props) {
    return (
        <li className="list-item-main" >
            <h4>{props.mealTitle}</h4>
        </li>
    );
}