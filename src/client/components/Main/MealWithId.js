import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MealWithId() {
    const [meal, setMeal] = useState({});
    const [reservations, setReservations] = useState([]);
    const params = useParams();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetchMealWithId().then((data) => {
            setMeal(data[0]);
        });
        fetchAvailReservation().then((data) => {
            setReservations(data);
        });
    }, []);

    async function fetchMealWithId() {
        try {
            // setIsLoading(true);
            setError(false);
            const response = await fetch(
                `http://localhost:5000/api/meals/${params.id}`
            );
            if (response.status >= 400) {
                setError(true);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            setError(true);
            setIsLoading(false);
        }
    }

    async function fetchAvailReservation() {
        try {
            const response = await fetch(
                `http://localhost:5000/api/meals?availableReservations=true`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            setError(true);
        }
    }

    const availRes = reservations
        .filter((item) => item.id == params.id)
        .map((e) => e.available_reservation);


    function handleSubmit() {
        addReservation({
            number_of_guests: 1,
            meal_id: meal.id,
            created_date: "2021-11-12",
            contact_name: name,
            contact_phonenumber: phone,
            contact_email: email,

        });
    }
    function addReservation(reservation) {
        console.log(reservation);
        fetch("http://localhost:5000/api/reservations", {
            method: "POST",
            body: JSON.stringify(reservation),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("Post sent succesfully");
                setEmail("");
                setName("");
                setPhone("");
            }
        });
    }

    return (
        <>
            {isLoading ? <p> Loading... </p> : ""}
            {error && <p> Something went wrong </p>}
            <h4> {meal.title} </h4>
            <p> {meal.description} </p>
            {parseInt(availRes) > 0 ? (
                <div>
                    <label htmlFor="POST-name"> Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="POST-name"
                    />
                    <label htmlFor="POST-phone"> Phone: </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        id="POST-phone"
                    />
                    <label htmlFor="POST-email"> Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="POST-email"
                    />
                    <button type="button" onClick={handleSubmit}>
                        Save{" "}
                    </button>
                </div>
            ) : (
                <p className="no-meals-left"> There is no available meals... </p>
            )}
        </>
    );
}
