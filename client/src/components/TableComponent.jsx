import React from 'react';
import { Table, Button } from 'react-bootstrap';

const getStatusEmoji = (isConnected) => {
  return isConnected ? '✅ Connecté' : '❌ Déconnecté';
};

const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString();
};

const TableComponent = ({ data, headers, columns, onUpdate, onDelete, onAddUser }) => {
  const handleModifier = (id) => {
    const userToUpdate = data.find(user => user.id === id);
    onUpdate(id, userToUpdate.username, userToUpdate.email, userToUpdate.password, userToUpdate.roles);
  };

  const handleSupprimer = (id) => {
    onDelete(id);
  };

  const handleDetails = (id) => {
    console.log(`Détails user with ID ${id}`);
  };

  const handleAddUser = () => {
    onAddUser("Nouvel utilisateur", "nouvel@email.com", "motdepasse", ["role1", "role2"]);
  };

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
                {column === 'isConnected' ? (
                  getStatusEmoji(item[column])
                ) : column === 'connectedDate' || column === 'disconnectedDate' ? (
                  (item[column])
                ) : column === 'modifier' ? (
                  <Button variant="primary" onClick={() => handleModifier(item.id)}>
                    Modifier
                  </Button>
                ) : column === 'supprimer' ? (
                  <Button variant="danger" onClick={() => handleSupprimer(item.id)}>
                    Supprimer
                  </Button>
                ) : column === 'détails' ? (
                  <Button variant="info" onClick={() => handleDetails(item.id)}>
                    Détails
                  </Button>
                ) : (
                  item[column]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={headers.length}>
            <Button variant="success" onClick={handleAddUser}>
              Ajouter un utilisateur
            </Button>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default TableComponent;
