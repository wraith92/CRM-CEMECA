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
          {field.type === 'select' ? (
            <Form.Control
              as='select'
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(e, field.name)}
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          ) : (
            <Form.Control
              as={field.as}
              type={field.type || 'text'}
              placeholder={field.placeholder}
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(e, field.name)}
            />
          )}
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
