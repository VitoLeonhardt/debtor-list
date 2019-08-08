// @flow

import type { DebtorT } from "../misc/Types";

export const LOAD_DEBTORS: string = "LOAD_DEBTORS";
export const UPDATE_DEBTOR: string = "UPDATE_DEBTOR";

export const LoadDebtors = () => {
    return {
        type: LOAD_DEBTORS
    };
};

export const UpdateDebtor = (newDebtor: DebtorT) => {
    return {
        type: UPDATE_DEBTOR,
        debtor: newDebtor
    };
};
