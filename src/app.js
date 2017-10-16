import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

// Test
const expenseOne = store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 100, 
  createdAt: -1001
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 300,
  createdAt: 1001
}));

store.dispatch(setTextFilter('gas'));
// End Test 

//console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
