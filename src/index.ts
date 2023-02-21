import 'dotenv/config';
import express from "express";
import {movementsRouter} from "./app/routes/movements";

const port = +process.env.PORT;

const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
    return res.sendStatus(200)
})

app.use("/movements", movementsRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

