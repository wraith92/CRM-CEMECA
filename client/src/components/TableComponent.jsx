// Votre composant React

import React from 'react';
import { Table } from 'react-bootstrap';

const getStatusEmoji = (isConnected) => {
  return isConnected ? '✅ Connecté' : '❌ Déconnecté';
};

const TableComponent = ({ data, headers, columns }) => {
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
            {columns.map((column, index) => (
              <td key={index}>
                {column === 'isConnected'
                  ? getStatusEmoji(item[column])
                  : column === 'connectedDate' || column === 'disconnectedDate'
                  ? item[column]
                  : item[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
