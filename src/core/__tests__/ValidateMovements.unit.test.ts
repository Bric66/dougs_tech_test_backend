import {ValidateMovements} from "../usecases/ValidateMovements";
import {acceptedTransactions} from "./fixtures/acceptedTransactions";
import {withDuplicatedMovements} from "./fixtures/withDuplicatedMovements";
import {withMissingMovementsAmount} from "./fixtures/withMissingMovementsAmount";

describe("Unit - ValidateMovements", () => {
    let validateMovements: ValidateMovements;

    beforeAll(async () => {
        validateMovements = new ValidateMovements();
    });

    it("should return an empty array of reasons", async () => {
        const result = await validateMovements.execute(acceptedTransactions)

        expect(result).toHaveLength(0)
    });

    it("should return an array of reasons with duplicated movements", async () => {
        const result = await validateMovements.execute(withDuplicatedMovements)

        expect(result.filter(elem => elem.duplicatedMovementsToDelete[0])).toHaveLength(2);
        expect(result[0].duplicatedMovementsToDelete).toHaveLength(1);
        expect(result[1].duplicatedMovementsToDelete).toHaveLength(1);
        expect(result.filter(elem => elem.missingMovementsAmountToAdd !== 0)).toHaveLength(0);
    });

    it("should return an array of reasons with missing movements amount to add", async () => {
        const result = await validateMovements.execute(withMissingMovementsAmount)

        expect(result.filter(elem => elem.missingMovementsAmountToAdd !== 0)).toHaveLength(2);
        expect(result[0].missingMovementsAmountToAdd !== 0).toBeTruthy();
        expect(result[1].missingMovementsAmountToAdd !== 0).toBeTruthy();
        expect(result.filter(elem => elem.duplicatedMovementsToDelete[0])).toHaveLength(0)
    });
});



