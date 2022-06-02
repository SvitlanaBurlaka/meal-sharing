import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ReviewForm(props) {
    const [meal, setMeal] = useState({});
    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [error, setError] = useState("");
    const params = useParams();

    useEffect(() => {
        fetchMealWithId();
    }, []);

    function fetchMealWithId() {
        fetch(`http://localhost:5000/api/meals/${params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMeal(data[0]);
            })
            .catch((error) => {
                setError("Something went wrong");
                console.log(error);
            });
    }

    function addReview(event) {
        event.preventDefault();
        fetch("http://localhost:5000/api/reviews", {
            method: "POST",
            body: JSON.stringify({
                title: "Review for" + meal.title,
                description: review,
                review_meal_id: parseInt(params.id),
                stars: parseInt(stars),
                created_date: "2021-08-05",
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                alert("Yor review sent succesfully");
                setReview("");
                setStars("");
            }
        });
    }

    return (
        <>
            <p>Here you can leave your review</p>
            <p> {error}</p>
            <form action="POST">
                <textarea
                    name="review"
                    id="review"
                    cols="30"
                    rows="10"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <label htmlFor="stars">Give a star:</label>
                <select
                    id="stars"
                    name="stars"
                    value={stars}
                    multiple={false}
                    onChange={(e) => setStars(e.target.value)}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button onClick={addReview}>Save</button>
            </form>
        </>
    );
}