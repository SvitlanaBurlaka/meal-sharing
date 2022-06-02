const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");

// Returns all reviews
router.get("/", async(request, response) => {
    try {
        let reviews = knex("review");
        const result = await reviews.select(
            "review.id",
            "review.title",
            "review.description",
            "review.review_meal_id",
            "review.stars",
            "review.created_date"
        );
        response.json(result);
    } catch (error) {
        throw error;
    }
});

// POST	Adds a new rewiew
router.post("/", async(request, response) => {
    try {
        const newItem = request.body;
        const newReview = await knex("review").insert(newItem);
        response.json(newReview);
    } catch (error) {
        throw error;
    }
});

module.exports = router;