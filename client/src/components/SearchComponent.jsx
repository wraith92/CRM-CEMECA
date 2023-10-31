import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Form>
      <Row>
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Button variant="primary" onClick={handleSearch}>
            Rechercher
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchComponent;
