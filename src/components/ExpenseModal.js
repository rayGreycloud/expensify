import React from 'react';
import Modal from 'react-modal';

const ExpenseModal = (props) => (
  <Modal
    isOpen={!!props.modalIsOpen}
    onRequestClose={props.onRemoveCancelled}    
    contentLabel="Expense to Remove"
    closeTimeoutMS={200}
    className="modal"    
  >
    <h2 className="modal__title">Are you sure?</h2>
    <p className="modal__body">Please confirm removal of this expense: <span>{props.description}</span></p>
    <div className="modal__buttons">
      <button className="button button--secondary" onClick={props.onRemoveCancelled}>Cancel</button>      
      <button className="button" onClick={props.onRemoveConfirmed}>Remove</button>    
    </div>
  </Modal>
);

export default ExpenseModal;
