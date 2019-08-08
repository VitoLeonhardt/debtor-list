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
            // normally, this would invoke a saga or something, which would await a call from an API function,
            // but here, we just mock it instead.
            return {...state, debtors: MockData }
        default:
            return state;
    }
}