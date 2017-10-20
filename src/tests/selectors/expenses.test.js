import moment from 'moment';

import selectExpenses from '../../selectors/expenses';

const expenses = [
  {
  id: '1',
  description: 'Art',
  note: '',
  amount: 195,
  createdAt: 0
  }, {
  id: '2',
  description: 'Bag',
  note: '',
  amount: 10195,
  createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
  id: '3',
  description: 'Cog',
  note: '',
  amount: 1000,
  createdAt: moment(0).add(4, 'days').valueOf()
  }
];

test('should filter expenses by text value', () => {
  const filters = {
    text: 'g',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1] ]);  
});

test('should filter expenses by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter expenses by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort expenses by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
