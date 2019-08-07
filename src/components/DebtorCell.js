// @flow

import React from "react";
import { Table } from "semantic-ui-react";

import type { DebtorT } from "../misc/Types";

export const DebtorCell = (props: DebtorT) => { 
    const { name, date_of_first_purchase, amount, amount_left } = props;
    return (<Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{date_of_first_purchase}</Table.Cell>
        <Table.Cell>{amount}</Table.Cell>
        <Table.Cell>{amount - amount_left}</Table.Cell>
        <Table.Cell>{amount_left}</Table.Cell>
      </Table.Row>)

}