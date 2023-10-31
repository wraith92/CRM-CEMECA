import React from 'react';
import { Table } from 'react-bootstrap';

const TableComponent = ({ data, headers ,columns }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {data.map((item) => (
  <tr key={item.id}>
    {columns.map((column, index) => ( // Utilisez `columns` au lieu de `headers`
      <td key={index}>{item[column]}</td> // Utilisez `item[column]` pour obtenir la valeur
    ))}
  </tr>
))}

            </tbody>
        </Table>
    );
};

export default TableComponent;
