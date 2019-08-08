// @flow

import React from "react";
import { Table } from "semantic-ui-react";
import "./DebtorCell.css";

import type { DebtorPropsT } from "../misc/Types";



export const DebtorCell = (props: DebtorPropsT) => { 
    const { name, date_of_first_purchase, amount, amount_left } = props.debtor;
    return (<Table.Row className="debtor-cell-clickable" onClick={() => props.onSelect(props.debtor)}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{date_of_first_purchase}</Table.Cell>
        <Table.Cell>{amount}</Table.Cell>
        <Table.Cell>{amount - amount_left}</Table.Cell>
        <Table.Cell>{amount_left}</Table.Cell>
      </Table.Row>)

}