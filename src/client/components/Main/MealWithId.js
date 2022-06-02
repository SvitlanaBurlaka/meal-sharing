import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormReservation } from "./FormReservation";
import { ReviewForm } from "./ReviewForm";
export function MealWithId() {
    const [meal, setMeal] = useState({});
    const [reservations, setReservations] = useState([]);
    const params = useParams();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [stars, setStars] = useState("0");

    useEffect(() => {
        fetchMealWithId();
        fetchAvailReservation();
    }, []);

    function fetchMealWithId() {
        fetch(`http://localhost:5000/api/meals/${params.id}`)
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
        fetch(`http://localhost:5000/api/meals?availableReservations=true`)
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
        <>
            {isLoading ? <p> Loading... </p> : ""}
            {error && <p> Something went wrong </p>}
            <h4> {meal.title} </h4>
            <p> {meal.description} </p>
            {parseInt(availRes) > 0 ? (
                <FormReservation id={meal.id} />
            ) : (
                <p className="no-meals-left"> There is no available meals... </p>
            )}
            <ReviewForm></ReviewForm>
        </>
    );
}
