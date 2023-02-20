import 'dotenv/config';
import express from "express";
import {movementsRouter} from "./app/routes/movements";

const port = +process.env.PORT_KEY;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        response: "ok"
    })
})

app.use("/movements", movementsRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


