import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 5
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    description: 'Dog',
    note: '',
    amount: 25000,
    createdAt: 2000    
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense by id', () => {
  const updatedNote = 'Updated Note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      note: updatedNote
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(updatedNote);
});

test('should not edit expense if id not found', () => {
  const updatedNote = 'Updated Note';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      note: updatedNote
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = { 
    type: 'SET_EXPENSES', 
    expenses: [expenses[1]] 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
