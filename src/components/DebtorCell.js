// @flow

import React from "react";

import type { DebtorT } from "../misc/Types";

export const DebtorCell = (props: DebtorT) => { 
    return <div>{props.name}</div>
}