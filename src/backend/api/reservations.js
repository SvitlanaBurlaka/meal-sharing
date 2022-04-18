const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reservations
router.get("/", async(request, response) => {
    try {
        let queryfromDB = knex("reservation");
        const result = await queryfromDB.select();
        response.json(result);
    } catch (error) {
        throw error;
    }
});

// POST	Adds a new reservation
router.post("/", async(request, response) => {
    try {
        const newItem = request.body;
        const newReservation = await knex("reservation").insert(newItem);
        response.json(newReservation);
    } catch (error) {
        throw error;
    }
});

// GET	Returns reservation by id
router.get("/:id", async(request, response) => {
    try {
        const neededId = request.params.id;
        if (Number(neededId)) {
            response.status(400).json("Invalid data");
        } else {
            const getById = await knex("reservation")
                .where({ id: neededId })
                .select("*");
            response.send(getById);
        }
    } catch (error) {
        throw error;
    }
});

// PUT	Updates the reservation by id
router.put("/:id", async(request, response) => {
    try {
        const updateReservation = request.body;
        const id = request.params.id;
        const updateById = await knex("reservation")
            .where({ id: id })
            .update({ contact_name: updateReservation.contact_name });
        response.json(updateById);
    } catch (error) {
        throw error;
    }
});

// DELETE	Deletes the reservation by id
router.delete("/:id", async(request, response) => {
    try {
        const myId = request.params.id;
        const deleteById = await knex("reservation").where({ id: myId }).del();
        response.json(deleteById);
    } catch (error) {
        throw error;
    }
});
module.exports = router;