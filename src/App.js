import React from 'react';
import logo from './logo.svg';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { DebtorReducer } from "./redux/reducer";
import './App.css';
import { DebtorList } from './components/DebtorList';

const store = createStore(DebtorReducer);

/*
  Notes: 
  If this was a normal use case, I probably wouldn't use redux as it's a bit heavy, but I'm doing 
  it here to showcase my familiarity with it.
*/

const App = () => {
  return (
    <Provider store={store}>
      <DebtorList />
    </Provider>
  );
}

export default App;
