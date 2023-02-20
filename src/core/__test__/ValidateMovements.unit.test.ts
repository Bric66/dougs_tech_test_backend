import {ValidateMovements} from "../usecases/ValidateMovements";
import {acceptedTransactions} from "./fixtures/acceptedTransactions";
import {withDuplicatedTransactions} from "./fixtures/withDuplicatedTransactions";
import {transactionsWithMissingMovementsAmount} from "./fixtures/transactionsWithMissingMovementsAmount";

const db = new Map();

describe("Unit - ValidateMovements", () => {
    let validateMovements: ValidateMovements;

    beforeAll(async () => {
        validateMovements = new ValidateMovements();

    });

    it("should validate movements", async () => {
        const result = await validateMovements.execute(acceptedTransactions)

        expect(result.filter(elem => elem.duplicatedMovements[0])).toHaveLength(0)
        expect(result.filter(elem => elem.missingMovementsAmount !== 0)).toHaveLength(0);
    });

    it("should find a duplicated transaction", async () => {
        const result = await validateMovements.execute(withDuplicatedTransactions)

        expect(result.filter(elem => elem.duplicatedMovements[0])).toHaveLength(1)
        expect(result.filter(elem => elem.missingMovementsAmount !== 0)).toHaveLength(0);
        console.log(result);
    });

    it("should find a missing movement amount > 0", async () => {
        const result = await validateMovements.execute(transactionsWithMissingMovementsAmount)

        expect(result.filter(elem => elem.duplicatedMovements[0])).toHaveLength(0)
        expect(result.filter(elem => elem.missingMovementsAmount !== 0)).toHaveLength(1);
    });
});



