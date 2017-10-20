import moment from 'moment';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';

test('should generate setTextFilter action object with provided text', () => {
  const text = 'bill'
  const action = setTextFilter(text);
  expect(action).toEqual({ 
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  });
});

test('should generate setTextFilter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({ 
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sortByDate action object', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate setStartDate action object with specified date', () => {
  const action = setStartDate(moment(1000));
  expect(action).toEqual({ 
    type: 'SET_START_DATE',
    date: moment(1000)
  });
});

test('should generate setEndDate action object with specified date', () => {
  const action = setEndDate(moment(1000));
  expect(action).toEqual({ 
    type: 'SET_END_DATE',
    date: moment(1000)
  });
});
