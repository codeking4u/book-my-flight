import express from "express";
import connectToDatabase from "../db/connection.js";
const router = express.Router()

/* Fetch best path */
router.get('/shortest-route', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("flights");
        const result = await collection.find({}).toArray();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


export default router;