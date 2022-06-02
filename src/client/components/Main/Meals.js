import React from "react";
import { useContext } from "react";
import { MealsContext } from "../MealsContext";
import { MealItem } from "./MealItem";
import { FormCreateNewMeal } from "./FormCreateNewMeal";

export function Meals() {

    const value = useContext(MealsContext);

    return (
        <>
            {value.isLoading ? <p>Loading...</p> : ""}
            {value.error && <p>Something went wrong</p>}
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
            <FormCreateNewMeal />
        </>
    );
}
