import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined  
};
const filtersReducer = (state = filtersReducerDefaultState, action ) => {
  switch (action.type) {
    default: 
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: 'abc123',
    description: 'Rent',
    note: 'Final payment',
    amount: 150000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
};

