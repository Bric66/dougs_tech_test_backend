import {Movement} from "./Movement";

export type Reason = {
    rangeDate: string;
    expectedBalance : number;
    calculatedBalance : number;
    difference : number;
    duplicatedMovementsToDelete : Movement[];
    missingMovementsAmountToAdd : number;
}