import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json({ limit: '1mb'}));
app.use(express.urlencoded({ extended: true, limit: '1mb'}));
app.use(cors());
app.get('/', async(req, res, next) => res.json({data: "HOLA"}))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))