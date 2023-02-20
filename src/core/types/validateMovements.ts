export type Movement = {
    id: string;
    date: Date;
    label: string;
    amount: number
}

export type Balance = {
    date: Date;
    balance: number
}

export type ValidateMovementsInput = {
    movements: Movement[];
    balances: Balance[]
}

export type Reason = {
    year_month: string;
    expectedBalance : number;
    calculatedBalance : number;
    difference : number;
    duplicatedMovements : Movement;
    missingMovementsAmount : number;
}