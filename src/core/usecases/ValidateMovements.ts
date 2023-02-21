import {UseCase} from "./Usecase";
import {Movement} from "../types/Movement";
import {Balance} from "../types/Balance";
import {Reason} from "../types/Reason";

export type ValidateMovementsInput = {
    movements: Movement[];
    balances: Balance[]
}
export class ValidateMovements implements UseCase<ValidateMovementsInput, Promise<Reason[]>> {

    async execute(input: ValidateMovementsInput): Promise<Reason[]> {
        const reasons: Reason[] = [];

        const filteredBalances = input.balances.sort(
            (a, b) => +new Date(a.date) - +new Date(b.date)
        )

        for (const [index, balance] of filteredBalances.entries()) {
            const nextBalance = filteredBalances[index + 1];
            if (nextBalance == null) {
                continue;
            }

            const currentRange = {
                min: balance.date,
                max: nextBalance.date,
                amount: nextBalance.balance
            }

            const movements = input.movements.filter(elem =>
                elem.date > currentRange.min &&
                elem.date <= currentRange.max
            )

            const movementsAmount = movements.map(elem => elem.amount).reduce((a, b) => a + b, 0);

            const duplicatedMovements: Movement[] = []
            for (const movement of movements) {
                const duplicated = movements.filter(elem => elem.id === movement.id);
                const isDuplicatedExist = duplicatedMovements.find(elem => elem.id === movement.id)
                if (duplicated.length > 1 && !isDuplicatedExist) {
                    duplicated.slice(1).map(elem => duplicatedMovements.push(elem))
                }
            }

            const duplicatedAmount = duplicatedMovements.reduce((a, b) => a + b.amount, 0)

            const missingMovementsAmount =
                nextBalance.balance -
                balance.balance -
                movementsAmount +
                duplicatedAmount


            const date = new Date(balance.date)
            const year = date.getFullYear()
            const month = date.getMonth()+1

            if (duplicatedMovements.length > 0 || missingMovementsAmount != 0) {
                reasons.push({
                    rangeDate: `${year}/${month}`,
                    expectedBalance: nextBalance.balance,
                    calculatedBalance: balance.balance + movementsAmount,
                    difference: balance.balance + movementsAmount - nextBalance.balance,
                    duplicatedMovementsToDelete: duplicatedMovements,
                    missingMovementsAmountToAdd: missingMovementsAmount
                })
            }
        }

        return reasons;
    }
}