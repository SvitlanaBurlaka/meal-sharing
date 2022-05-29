import React from "react";
import { useState, useEffect } from "react";
import { MealItem } from "./MealItem";

export function Meals() {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchMeals() {
        const response = await fetch("http://localhost:5000/api/meals");
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        fetchMeals().then((data) => {
            setMeals(data);
        }).catch((error) => {
            setError(true);
            console.log(error)
        })
    }, []);

    return (
        <>
            {isLoading ? <p>Loading...</p> : ""}
            {error && <p>Something went wrong</p>}
            <ul className="meals-list">
                {meals.map((item) => {
                    return (
                        <MealItem
                            key={item.id}
                            id={item.id}
                            mealTitle={item.title}
                            mealPrice={item.price}
                            // descriprionMeal={item.description}
                            locationRestaurant={item.location}
                        // availiableReservation={item.available_reservation}
                        />
                    );
                })}
            </ul>
        </>
    );
}
