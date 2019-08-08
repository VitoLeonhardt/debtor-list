import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "semantic-ui-react";

import { LoadDebtors, UpdateDebtor } from "../redux/actions";
import { DebtorCell } from "./DebtorCell";
import { DebtorModal } from "./DebtorModal";

export const DebtorList = () => {
    const dispatch = useDispatch();
    const debtors: DebtorT[] = useSelector((state: StoreT) => state.debtors);
    const [selectedField, selectField] = useState(null);

    useEffect(() => {
        if(debtors.length === 0) {
            dispatch(LoadDebtors());
        }
    })

    const onSelect = (debtor:DebtorT ) => { selectField(debtor)};
    const onModalClose = (updatedData: ?DebtorT) => { 
        selectField(null);
        if(updatedData) {
            dispatch(UpdateDebtor(updatedData));
        }
    };

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
    { debtors.map((debtor: DebtorT) => <DebtorCell debtor={debtor} onSelect={onSelect} key={"debtor-" + debtor.id} />) }
    </Table.Body>
    </Table>
    <DebtorModal open={!!selectedField} debtor={selectedField} onClose={onModalClose} />
    </div>
}