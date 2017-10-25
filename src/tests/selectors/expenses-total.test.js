import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expensesArray = [];
  const total = 0;
  const result = selectExpensesTotal(expensesArray);
  expect(result).toEqual(total);  
});

test('should correctly calculate total of one expense', () => {
  const expensesArray = [expenses[0]];
  const total = expenses[0].amount;
  const result = selectExpensesTotal(expensesArray);
  expect(result).toEqual(total);
});

test('should correctly calculate total of multiple expenses', () => {
  const expensesArray = expenses;
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const result = selectExpensesTotal(expensesArray);
  expect(result).toEqual(total);
});
