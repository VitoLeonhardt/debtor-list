// @flow

import { LOAD_DEBTORS } from "./actions";
import MockData from "./mock.json";

import type { StoreT } from "../misc/Types";


const initialState: StoreT = {
    debtors: []
};

export const DebtorReducer: Function = (state: StoreT = initialState, action: Object) => {
    switch(action.type) {
        case LOAD_DEBTORS:
            return {...state, debtors: MockData }
        default:
            return state;
    }
}