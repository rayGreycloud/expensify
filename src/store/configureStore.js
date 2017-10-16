import { createStore, combineReducers } from 'redux';

import expensesReducers from '../reducers/expenses';
import filtersReducers from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );
  
  return store;
};
