import express from "express";
import {ValidateMovements} from "../../core/usecases/ValidateMovements";

const movementsRouter = express.Router();

const validateMovements = new ValidateMovements();

movementsRouter.post('/validation', async (req, res) => {
    try {
        const body = {
            movements: req.body.movements,
            balances: req.body.balances
        };

        const reasons = await validateMovements.execute(body);

        if (reasons.length > 0) {
            return res.status(418).send({
                reasons: reasons
            });
        }

        return res.sendStatus(202)

    } catch (err) {
        return res.status(400).send({
            message: err.message,
        });
    }
})

export {movementsRouter};