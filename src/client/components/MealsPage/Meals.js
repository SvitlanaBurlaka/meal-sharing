import React from "react";
import { useContext } from "react";
import { MealsContext } from "../MealsContext/MealsContext";
import { MealItem } from "./MealItem";


export function Meals() {
    const value = useContext(MealsContext);

    return (
        <div className="meals-container">
            {value.isLoading ? <p className="loading-text">Loading...</p> : ""}
            {value.error && <p className="error-text">Something went wrong</p>}
            <ul className="meals-list">
                {value.meals.map((item) => {
                    return (
                        <MealItem
                            key={item.id}
                            id={item.id}
                            mealTitle={item.title}
                            mealPrice={item.price}
                            locationRestaurant={item.location}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
