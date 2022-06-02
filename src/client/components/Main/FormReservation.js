import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MealsContext } from "../MealsContext";

export function FormReservation(props) {
    const value = useContext(MealsContext);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    function addReservation(event) {
        event.preventDefault();
        setError("");
        if (name.trim().length == 0 || phone.trim().length == 0 || email.trim().length == 0) {
            setError("Don`t leave empty inputs please.");
        } else {
            fetch("http://localhost:5000/api/reservations", {
                method: "POST",
                body: JSON.stringify({
                    number_of_guests: 1,
                    meal_id: props.id,
                    created_date: value.getTodaysDate(),
                    contact_name: name,
                    contact_phonenumber: phone,
                    contact_email: email,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Post sent succesfully");
                        setEmail("");
                        setName("");
                        setPhone("");
                    }
                })
                .catch((error) => {
                    alert(error);
                    setError(true);
                    console.log(error);
                });
        }

    }
    return (<>
        <p>{error}</p>
        <form onSubmit={addReservation}>
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
            <button type="submit" >
                Save
            </button>
        </form>
    </>

    );
}