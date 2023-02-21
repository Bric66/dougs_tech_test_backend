import "dotenv/config";
import express from "express";
import {movementsRouter} from "../routes/movements";
import supertest from "supertest";
import {status418Transactions} from "./fixtures/status418Transactions";
import {status202Transactions} from "./fixtures/status202Transactions";

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
                status202Transactions
            )
            .expect(202);
    });

    it("Should post /movements/validation and return status 418, reasons array", async () => {
        await supertest(app)
            .post("/movements/validation")
            .send(
                status418Transactions
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
