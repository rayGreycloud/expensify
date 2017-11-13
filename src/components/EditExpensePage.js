import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseModal from './ExpenseModal';

export class EditExpensePage extends Component {  
  state = {
    modalIsOpen: undefined
  };
  
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/'); 
  };
  
  onRemove = () => {
    this.setState(() => ({ modalIsOpen: true }));    
  };
  
  onRemoveCancelled = () => {
    this.setState(() => ({ modalIsOpen: false })); 
  };
  
  onRemoveConfirmed = () => {
    this.setState(() => ({ modalIsOpen: false }));
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');    
  };
  
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">                
          <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}
          >
            Remove Expense
          </button>
        </div>
        <ExpenseModal 
          modalIsOpen={this.state.modalIsOpen}
          onRequestClose={this.onRemoveCancelled}
          description={this.props.expense.description}
          onRemoveConfirmed={this.onRemoveConfirmed}
          onRemoveCancelled={this.onRemoveCancelled}
        />
      </div>
    );    
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);