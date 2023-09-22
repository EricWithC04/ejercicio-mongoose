import express from "express";
import environments from "./environments/environments.js";

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("ruta de prueba")
})

app.listen(environments.port, () => {
    console.log(`Server listen in port ${environments.port}`);
})