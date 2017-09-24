import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
  <div>404 - this is not the page you're looking for...
    <p><Link to="/">Go home</Link></p>
  </div>
);

const Header = () => (
  <header><h1>Expensify</h1></header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
