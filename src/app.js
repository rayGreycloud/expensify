import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>Dashboard Component</div>
);

const AddExpensePage = () => (
  <div>Add Expense Component</div>
);
const EditExpensePage = () => (
  <div>Edit Expense Component</div>
);
const HelpPage = () => (
  <div>Help Component</div>
);
const NotFound = () => (
  <div>404 - this is not the page you're looking for...</div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
