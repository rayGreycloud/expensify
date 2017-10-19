import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  };
  
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  
  onAmountChange = (e) => {
    const amount = e.target.value;
    // regex to enforce dollar format
    if (!amount || amount.match(/^\d{1,10}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  
  onDateChange = (createdAt) => {
    if (createAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  
  render () {
    return (
      <div>
        <form action="">
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
            focused={this.state.calendarFocused}
            numberOfMonths={1}
            isOutsideRange={() => false}  
          />
          <textarea 
            cols="22"
            placeholder="Add a note (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
            </textarea>
            <button>Add Expense</button>
        </form>
      </div>
    );
  }  
} 