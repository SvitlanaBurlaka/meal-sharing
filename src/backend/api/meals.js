const { query } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

// GET	Returns all meals
router.get("/", async(request, response) => {
    try {
        let queryfromDB = knex("meal");
        if (request.query["maxPrice"]) {
            queryfromDB = queryfromDB.where("price", "<", request.query["maxPrice"]);
        }
        if (request.query["availableReservations"]) {
            queryfromDB = queryfromDB.whereNotNull("max_reservations");
        }
        if (request.query["title"]) {
            queryfromDB = queryfromDB.where(
                "title",
                "like",
                `%${request.query["title"]}%`
            );
        }
        if (request.query["createdAfter"]) {
            if (new Date(request.query["createdAfter"]) != "Invalid Date") {
                queryfromDB = queryfromDB.where(
                    "created_date",
                    ">",
                    request.query["createdAfter"]
                );
            } else {
                response.status(400).json("Invalid date");
            }
        }

        if (request.query["limit"]) {
            queryfromDB = queryfromDB.limit(request.query["limit"]);
        }

        const result = await queryfromDB.select(
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
        const neededId = request.params.id;
        if (!Number(neededId)) {
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
        const id = request.params.id;
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