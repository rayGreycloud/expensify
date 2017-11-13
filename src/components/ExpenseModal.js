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
    <h3 className="modal__title">Are you sure?</h3>
    <p className="modal__body">Please confirm removal of this expense: <strong>{props.description}</strong></p>
    <div className="modal__buttons">
      <button className="button button--secondary" onClick={props.onRemoveCancelled}>Cancel</button>      
      <button className="button" onClick={props.onRemoveConfirmed}>Remove</button>    
    </div>
  </Modal>
);

export default ExpenseModal;
