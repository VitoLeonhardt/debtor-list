// @flow

// type of a single debtor
export type DebtorT = {
    id: number,
    name: string,
    amount: number,
    amount_left: number,
    date_of_first_purchase: string 
};

export type DebtorPropsT = {
    debtor: DebtorT,
    onSelect: Function
}

export type ModalPropsT = {
    debtor: ?DebtorT,
    open: boolean,
    onClose: Function
}

// redux store type
export type StoreT = {
    debtors: DebtorT[]
}