import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormReservation } from "./FormReservation";
import { ReviewForm } from "./ReviewForm";
import { ReviewsComponent } from "./ReviewsComponent";
import "./mealWithId.css";

export function MealWithId() {
    const [meal, setMeal] = useState({});
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    useEffect(() => {
        fetchMealWithId();
        fetchAvailReservation();
    }, []);

    function fetchMealWithId() {
        fetch(`/api/meals/${params.id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setMeal(data[0]);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(true);
                setIsLoading(false);
                console.log(error);
            });
    }

    function fetchAvailReservation() {
        fetch(`/api/meals?availableReservations=true`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setReservations(data);
            })
            .catch((error) => {
                setError(true);
                console.log(error);
            });
    }

    const availRes = reservations
        .filter((item) => item.id == params.id)
        .map((e) => e.available_reservation);

    return (
        <div className="id-meal-container">
            {isLoading ? <p className="loading-text"> Loading... </p> : ""}
            {error && <p className="error-text"> Something went wrong </p>}
            <h3 className="meal-title"> {meal.title} </h3>
            <p className="meal-description"> {meal.description} </p>
            {parseInt(availRes) > 0 ? (
                <>
                    <p className="meal-description">There is {availRes} meals left </p>
                    <FormReservation
                        id={meal.id}
                        reloadReservations={fetchAvailReservation}
                    />
                </>
            ) : (
                <p className="no-meals-left">
                    Sorry...There is no available meals left...{" "}
                </p>
            )}
            <ReviewsComponent id={params.id}></ReviewsComponent>
            <ReviewForm></ReviewForm>
        </div>
    );
}
