import {v4} from "uuid"
import {ValidateMovementsInput} from "../../usecases/ValidateMovements";

export const acceptedTransactions: ValidateMovementsInput = {
    movements: [
        {
            id: v4(),
            date: new Date("2022-11-15"),
            label: 'label1',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2022-12-17"),
            label: 'label2',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2022-12-20"),
            label: 'label3',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2022-12-25"),
            label: 'label4',
            amount: -100,
        },
        {
            id: v4(),
            date: new Date("2023-01-17"),
            label: 'label5',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2023-01-20"),
            label: 'label6',
            amount: 50,
        },
        {
            id: v4(),
            date: new Date("2023-01-25"),
            label: 'label7',
            amount: 50,
        },
        {
            id: v4(),
            date: new Date("2023-02-17"),
            label: 'label8',
            amount: -500,
        },
        {
            id: v4(),
            date: new Date("2023-02-20"),
            label: 'label9',
            amount: -100,
        },
        {
            id: v4(),
            date: new Date("2023-02-25"),
            label: 'label10',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2023-03-17"),
            label: 'label11',
            amount: 200,
        },
        {
            id: v4(),
            date: new Date("2023-03-20"),
            label: 'label12',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2023-03-25"),
            label: 'label13',
            amount: 100,
        },
        {
            id: v4(),
            date: new Date("2023-04-25"),
            label: 'label14',
            amount: 100,
        },
    ],

    balances: [
        {
            date: new Date("2023-04-01"),
            balance: 200
        },
        {
            date: new Date("2022-12-01"),
            balance: 0
        },
        {
            date: new Date("2023-01-01"),
            balance: 100
        },
        {
            date: new Date("2023-03-01"),
            balance: -200
        },
        {
            date: new Date("2023-02-01"),
            balance: 300
        }
    ]
}