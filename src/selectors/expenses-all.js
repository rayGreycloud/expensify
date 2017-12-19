export default expensesAll = (expenses) => {
  // get startDates of each expense
  const startDates = expenses.map(expense => expense.startDate);
  // get earliest startDate
  const earliestStartDate =  startDates.reduce((earliest, startDate) => {
    startDate < earliest ? startDate : earliest;  
  }, startDates[0]);
  
  return earliestStartDate;
}

// Call action creators setStartDate(earliestStartDate);

/*
Alternative: refactor selectors/expenses.js
Use separate functions to get expenses, filter expenses (if necessary) and sort expenses

Use new piece of state - showAll boolean to determine if filters are necessary

if showing all, need to set startDate and endDate
*/