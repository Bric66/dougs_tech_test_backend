import "dotenv/config";
import express from "express";
import {movementsRouter} from "../routes/movements";
import supertest from "supertest";
import {acceptedTransactions} from "../../core/__test__/fixtures/acceptedTransactions";
import {ValidateMovements} from "../../core/usecases/ValidateMovements";
import {withDuplicatedTransactions} from "../../core/__test__/fixtures/withDuplicatedTransactions";


const app = express();

describe("E2E - Movements Router", () => {
    let validateMovements : ValidateMovements;

    beforeAll(async () => {
        app.use(express.json());
        app.use("/movements", movementsRouter);

        validateMovements = new ValidateMovements();

    });

    it("Should post/movements/validation with status 202", async () => {
        await supertest(app)
            .post("/movements/validation")
            .send(acceptedTransactions)
            .expect((response) => {
                const responseBody = response.body;
                expect(responseBody).toEqual({"message" : "Accepted"});
            })
            .expect(202);
    });

    it("Should post/movements/validation with status 408 and reasons", async () => {
        await supertest(app)
            .post("/movements/validation")
            .send(withDuplicatedTransactions)
            .expect((response) => {
                const responseBody = response.body;
                console.log(responseBody)
                expect(responseBody.message).toEqual("I'm a teapot");
            })
            .expect(408);
    });
});
