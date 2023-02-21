import {v4} from "uuid"
import {ValidateMovementsInput} from "../../../core/usecases/ValidateMovements";

export const status418Transactions : ValidateMovementsInput = {
    movements: [
        {
            id: v4(),
            date : new Date("11-15-2022"),
            label : 'label1',
            amount : 100,
        },
        {
            id: "duplicated_id_1",
            date : new Date("12-17-2022"),
            label : 'label2',
            amount : 100,
        },
        {
            id: "duplicated_id_1",
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
            amount : -100,
        },

        {
            id: v4(),
            date : new Date("01-17-2023"),
            label : 'label5',
            amount : 100,
        },
        {
            id:  v4(),
            date : new Date("01-20-2023"),
            label : 'label6',
            amount : 50,
        },
        {
            id: v4(),
            date : new Date("02-17-2023"),
            label : 'label8',
            amount : -500,
        },
        {
            id: v4(),
            date : new Date("02-20-2023"),
            label : 'label9',
            amount : -100,
        },
        {
            id: v4(),
            date : new Date("02-25-2023"),
            label : 'label10',
            amount : 100,
        },
        {
            id: v4(),
            date : new Date("03-17-2023"),
            label : 'label11',
            amount : 200,
        },
        {
            id: v4(),
            date : new Date("03-20-2023"),
            label : 'label12',
            amount : 100,
        },
        {
            id: "duplicated_id_2",
            date : new Date("03-25-2023"),
            label : 'label13',
            amount : 100,
        },
        {
            id: "duplicated_id_2",
            date : new Date("03-25-2023"),
            label : 'label13',
            amount : 100,
        },
        {
            id: v4(),
            date : new Date("04-25-2023"),
            label : 'label14',
            amount : 100,
        },

    ],
    balances: [
        {
            date : new Date("2023-04-01"),
            balance : 200
        },
        {
            date : new Date("2022-12-01"),
            balance : 0
        },
        {
            date : new Date("2023-01-01"),
            balance : 100
        },
        {
            date : new Date("2023-03-01"),
            balance : -200
        },
        {
            date : new Date("2023-02-01"),
            balance : 300
        }
    ]
}