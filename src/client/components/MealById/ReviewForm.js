import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ReviewForm() {
    const [meal, setMeal] = useState({});
    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("");
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
                name: name,
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
        <div className="review-container">
            <p className="review-p">
                Have you alredy tried this meal? Leave your review please.
            </p>
            <p className="error-text"> {error}</p>
            <form action="POST">
                <div className="select-container">
                    <label htmlFor="POST-name" className="name-label">
                        Name:
                    </label>
                    <input
                        className="review-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="POST-name"
                    />
                    <textarea
                        className="review-text"
                        name="review"
                        id="review"
                        cols="30"
                        rows="10"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                    <label htmlFor="POST-stars" className="name-label">Give a star:</label>
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
                    <button className="save-review-button" onClick={addReview}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
