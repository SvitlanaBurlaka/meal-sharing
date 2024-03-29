const { query } = require("express");
const express = require("express");
const { sum } = require("../database");
const router = express.Router();
const knex = require("../database");

// GET	Returns all meals
router.get("/", async(request, response) => {
    try {
        let meals = knex("meal");
        if (request.query["maxPrice"]) {
            meals = meals.where("price", "<", request.query["maxPrice"]);
        }
        if (
            request.query["availableReservations"] === "true" &&
            request.query["availableReservations"] !== "undefined"
        ) {
            meals = meals
                .leftJoin("reservation", "meal.id", "=", "reservation.meal_id")
                .select(
                    "meal.id",
                    "meal.title",
                    "meal.description",
                    "meal.location",
                    "meal.when",
                    "meal.created_date",
                    "meal.price",
                    "meal.max_reservations",
                    knex.raw(
                        "COALESCE(SUM(reservation.number_of_guests),0) as total_guests"
                    ),
                    knex.raw(
                        "(meal.max_reservations-COALESCE(SUM(reservation.number_of_guests),0)) AS available_reservation"
                    )
                )
                .groupBy("meal.id");
        }
        if (request.query["title"]) {
            meals = meals.where("title", "like", `%${request.query["title"]}%`);
        }
        if (request.query["createdAfter"]) {
            if (new Date(request.query["createdAfter"]) != "Invalid Date") {
                meals = meals.where("created_date", ">", request.query["createdAfter"]);
            } else {
                response.status(400).json("Invalid date");
            }
        }

        if (request.query["limit"]) {
            meals = meals.limit(request.query["limit"]);
        }

        const result = await meals.select(
            "meal.id",
            "meal.title",
            "meal.description",
            "meal.location",
            "meal.when",
            "meal.max_reservations",
            "meal.price",
            "meal.created_date"
        );
        if (result.length === 0) {
            response.status(404).json("Not found");
        } else {
            response.json(result);
        }
    } catch (error) {
        throw error;
    }
});

// POST	Adds a new meal
router.post("/", async(request, response) => {
    try {
        const newItem = request.body;
        const newMeal = await knex("meal").insert(newItem);
        response.json(newMeal);
    } catch (error) {
        throw error;
    }
});

// GET	Returns meal by id
router.get("/:id", async(request, response) => {
    try {
        const neededId = Number(request.params.id);
        if (isNaN(neededId)) {
            response.status(400).json("Invalid data");
        } else {
            const getById = await knex("meal").where({ id: neededId }).select("*");
            response.send(getById);
        }
    } catch (error) {
        throw error;
    }
});

// PUT	Updates the meal by id
router.put("/:id", async(request, response) => {
    try {
        const updateMeals = request.body;
        const id = Number(request.params.id);
        const updateById = await knex("meal")
            .where({ id: id })
            .update({ title: updateMeals.title });
        response.json(updateById);
    } catch (error) {
        throw error;
    }
});

// DELETE	Deletes the meal by id
router.delete("/:id", async(request, response) => {
    try {
        const myId = request.params.id;
        const deleteById = await knex("meal").where({ id: myId }).del();
        response.json(deleteById);
    } catch (error) {
        throw error;
    }
});

module.exports = router;