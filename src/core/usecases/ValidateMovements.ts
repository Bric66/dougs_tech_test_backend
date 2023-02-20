import {UseCase} from "./Usecase";
import {Reason, ValidateMovementsInput} from "../types/validateMovements";

export class ValidateMovements implements UseCase<ValidateMovementsInput, Promise<Reason[]>> {

    async execute(input: ValidateMovementsInput): Promise<Reason[]> {
        const reasons = [];

        for await (const [index, balance] of input.balances.entries()) {
            const nextBalance = input.balances[index + 1];
            if (nextBalance == null) {
                continue;
            }

            const currentRange = {
                min: balance.date,
                max: nextBalance.date,
                amount: nextBalance.balance
            }

            console.log(balance.date)
            const movements = input.movements.filter(elem =>
                elem.date > currentRange.min &&
                elem.date <= currentRange.max
            )

            const movementsAmount = movements.map(elem => elem.amount).reduce((a, b) => a + b, 0);

            const duplicatedMovements = []
            for (const movement of movements) {
                const duplicated = movements.filter(elem => elem.id === movement.id);
                if (duplicated.length > 1 &&
                    !duplicatedMovements.find(elem => elem.id === duplicated[0].id)
                ) {
                    duplicatedMovements.push(duplicated[0])
                }
            }

            const duplicatedAmount = duplicatedMovements.reduce((a, b) => a + b.amount, 0)

            const missingMovementsAmount =
                nextBalance.balance -
                balance.balance -
                movementsAmount +
                duplicatedAmount

            if (duplicatedMovements.length > 0 || missingMovementsAmount != 0) {
                reasons.push({
                    year_month: `${balance.date.getFullYear()}/${("0" + (balance.date.getMonth() + 1)).slice(-2)}`,
                    expectedBalance: nextBalance.balance,
                    calculatedBalance: balance.balance + movementsAmount,
                    difference: balance.balance + movementsAmount - nextBalance.balance,
                    duplicatedMovements: duplicatedMovements,
                    missingMovementsAmount: missingMovementsAmount
                })
            }
        }

        return reasons;
    }
}