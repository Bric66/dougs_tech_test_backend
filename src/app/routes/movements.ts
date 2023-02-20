import express from "express";
import {ValidateMovements} from "../../core/usecases/ValidateMovements";

const movementsRouter = express.Router();

const validateMovements = new ValidateMovements();

movementsRouter.get('/', (req, res) => {
    res.status(200).send({
        response: "ok"
    })
})

movementsRouter.post('/validation', async (req, res) => {
    try {
        const body = {
            movements: req.body.movements,
            balances: req.body.balances
        };

        const reasons = await validateMovements.execute(body);

        if (reasons.length > 0) {
            return res.status(408).send({
                message: "I'm a teapot",
                reasons: reasons
            });
        }

        return res.status(202).send({
            message: 'Accepted'
        });

    } catch (err) {
        return res.status(400).send({
            message: err.message,
        });

    }
})

export {movementsRouter};