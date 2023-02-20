import {v4} from "uuid"
import {ValidateMovementsInput} from "../../types/validateMovements";

export const transactionsWithMissingMovementsAmount : ValidateMovementsInput = {
    movements: [
        {
            id: v4(),
            date : new Date("11-15-2022"),
            label : 'label1',
            amount : 500,
        },
        {
            id: v4(),
            date : new Date("12-17-2022"),
            label : 'label2',
            amount : 100,
        },
        {
            id: v4(),
            date : new Date("12-20-2022"),
            label : 'label3',
            amount : 100,
        },
        {
            id: v4(),
            date : new Date("12-25-2022"),
            label : 'label4',
            amount : 100,
        },

        {
            id: v4(),
            date : new Date("01-02-2023"),
            label : 'label5',
            amount : 100,
        },
        {
            id:  v4(),
            date : new Date("01-03-2023"),
            label : 'label6',
            amount : 50,
        },
        {
            id:  v4(),
            date : new Date("01-05-2023"),
            label : 'label7',
            amount : 50,
        },
        {
            id: v4(),
            date : new Date("02-05-2023"),
            label : 'label8',
            amount : 200,
        },
        {
            id: v4(),
            date : new Date("02-10-2023"),
            label : 'label9',
            amount : 100,
        },
        {
            id: v4(),
            date : new Date("02-15-2023"),
            label : 'label10',
            amount : 10,
        },
        {
            id: v4(),
            date : new Date("02-20-2023"),
            label : 'label11',
            amount : -1100,
        },
        {
            id: v4(),
            date : new Date("04-01-2023"),
            label : 'label12',
            amount : 100,
        },
    ],
    balances: [
        {
            date : new Date("2022-12-01T05:00:00.000Z"),
            balance : 0
        },
        {
            date : new Date("2023-01-01T05:00:00.000Z"),
            balance : 300
        },
        {
            date : new Date("2023-02-01T05:00:00.000Z"),
            balance : 500
        },
        {
            date : new Date("2023-03-01T05:00:00.000Z"),
            balance : -200
        }
    ]
}