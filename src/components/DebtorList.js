import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadDebtors } from "../redux/actions";
import { DebtorCell } from "./DebtorCell";

export const DebtorList = () => {
    const dispatch = useDispatch();
    const debtors: DebtorT[] = useSelector((state: StoreT) => state.debtors);

    useEffect(() => {
        if(debtors.length === 0) {
            dispatch(LoadDebtors());
        }
    })
    return <div>
    { debtors.map((debtor: DebtorT) => <DebtorCell {...debtor} />) }
    </div>
}