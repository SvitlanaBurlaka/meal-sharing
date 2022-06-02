import React from "react";
import { MainPageMealItem } from "./MainPageMealItem";
import { useContext } from "react";
import { MealsContext } from "../MealsContext";

export function MainPageComponent() {
    const value = useContext(MealsContext);
    return (
        <>
            {value.isLoading ? <p>Loading...</p> : ""}
            {value.error && <p>Something went wrong</p>}
            <ul>
                {value.meals.map((item) => {
                    return (
                        <MainPageMealItem
                            key={item.id}
                            id={item.id}
                            mealTitle={item.title}
                            mealDescription={item.description}
                        />
                    );
                })}
            </ul>
        </>
    );
}
