import express from "express";
import {movementsRouter} from "../routes/movements";
import supertest from "supertest";
import {transactionsWithErrors} from "./fixtures/transactionsWithErrors";
import {acceptedTransactions} from "./fixtures/acceptedTransactions";

const app = express();

describe("E2E - Movements Router", () => {

    beforeAll(async () => {
        app.use(express.json());
        app.use("/movements", movementsRouter);
    });

    it("Should post /movements/validation and return status 202", async () => {
        await supertest(app)
            .post("/movements/validation")
            .send(
                acceptedTransactions
            )
            .expect(202);
    });

    it("Should post /movements/validation and return status 418, reasons array", async () => {
        await supertest(app)
            .post("/movements/validation")
            .send(
                transactionsWithErrors
            )
            .expect((response) => {
                const responseBody = response.body;
                expect(responseBody).toBeTruthy();
            })
            .expect(418);
    });

    it("Should return status 400", async () => {
        await supertest(app)
            .post("/movements/validation")
            .send()
            .expect(400);
    });
});
