import express from "express";
const app = express();
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
        res.json("Hello")
})

app.listen(5000, () => console.log("API is working"));