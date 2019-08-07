// @flow

// type of a single debtor
export type DebtorT = {
    id: number,
    name: string,
    amount: number,
    amount_left: number,
    date_of_first_purchase: string 
};

// redux store type
export type StoreT = {
    debtors: DebtorT[]
}