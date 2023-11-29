import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import GenericForm from './GenericForm';
import { fields } from '../data/GFRegisterFields';

const ModalForm = ({ show, onHide, onSubmit, userData, modalTitle }) => {


  const handleFormSubmit = (formData) => {
    onSubmit(formData);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GenericForm fields={fields} onSubmit={handleFormSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
