import React from "react";
import { MainPageMealItem } from "./MainPageMealItem";
import { useContext } from "react";
import { MealsContext } from "../MealsContext";

export function MainPageComponent() {
    const value = useContext(MealsContext);
    return (
        <>
            {value.isLoading ? <p className=".loading-text">Loading...</p> : ""}
            {value.error && <p className="error-text">Something went wrong</p>}
            <ul className="meals-home-page">
                {value.meals.map((item) => {
                    return (
                        <MainPageMealItem
                            key={item.id}
                            id={item.id}
                            mealTitle={item.title}
                        />
                    );
                })}
            </ul>
        </>
    );
}
