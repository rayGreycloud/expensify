import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

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
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Test

store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 30000, 
  createdAt: 1508439500000
}));

store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 20000,
  createdAt: 1507438600000
}));

store.dispatch(addExpense({
  description: 'Rent',
  amount: 150000,
  createdAt: 1506329600000
}));

// End Test 

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
