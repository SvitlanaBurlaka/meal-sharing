import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MealsContext } from "../MealsContext";

export function FormCreateNewMeal() {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [maxReserv, setMaxReserv] = useState("");
    const [error, setError] = useState("");
    const value = useContext(MealsContext);

    function addMeal(event) {
        event.preventDefault();
        setError("");
        if (
            title.trim().length == 0 ||
            location.trim().length == 0 ||
            price.trim().length == 0 ||
            maxReserv.trim().length == 0
        ) {
            setError("Don`t leave empty inputs please.");
        } else {
            fetch("/api/meals", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    location: location,
                    created_date: value.getTodaysDate(),
                    price: price,
                    max_reservations: maxReserv,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                if (response.ok) {
                    alert("Post sent succesfully");
                    value.fetchMeals();
                    setTitle("");
                    setLocation("");
                    setPrice("");
                    setMaxReserv("");
                }
            });
        }
    }

    return (
        <div className="form-add-meal">
            <p className="error-text"> {error}</p>
            <h4 className="form-text">
                Do you want to add new meal? Fill up the form .
            </h4>
            <form onSubmit={addMeal}>
                <label htmlFor="POST-title">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="name"
                    id="POST-title"
                />
                <label htmlFor="POST-location">Location:</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    name="location"
                    id="POST-location"
                />
                <label htmlFor="POST-price">Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    id="POST-price"
                />
                <label htmlFor="POST-max_reservations">Max Reservations:</label>
                <input
                    type="number"
                    value={maxReserv}
                    onChange={(e) => setMaxReserv(e.target.value)}
                    name="max_reservations"
                    id="POST-max_reservations"
                />
                <button type="submit">Add Meal</button>
            </form>
        </div>
    );
}
