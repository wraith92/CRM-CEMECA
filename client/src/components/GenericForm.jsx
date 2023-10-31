import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const GenericForm = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Form.Group as={Row} key={field.name}>
          <Form.Label column sm={2}>
            {field.label}
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type={field.type || 'text'}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(e, field.name)}
            />
          </Col>
        </Form.Group>
      ))}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default GenericForm;
