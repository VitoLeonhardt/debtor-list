import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "semantic-ui-react";

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
    <Table celled selectable>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Date of first purchase</Table.HeaderCell>
                <Table.HeaderCell>Max amount</Table.HeaderCell>
                <Table.HeaderCell>Amount used</Table.HeaderCell>
                <Table.HeaderCell>Amount left</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
    { debtors.map((debtor: DebtorT) => <DebtorCell {...debtor} />) }
    </Table.Body>
    </Table>
    </div>
}