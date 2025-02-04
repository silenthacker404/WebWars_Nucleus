const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/api/events", (req, res) => {
    res.json({ description: "Welcome to WebWars 2025! Compete & showcase your skills." });
});

app.listen(5000, () => console.log("Server running on port 5000"));
