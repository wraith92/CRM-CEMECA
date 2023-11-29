import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  updateUser,
  deleteUser,
  addUser
} from '../actions/userActions';
import TableComponent from '../components/TableComponent';
import SearchUserComponent from '../components/SearchComponent';
import ModalForm from '../components/ModalForm';

function UserScreen() {
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const [showEditModal, setShowEditModal] = useState(false); // Ajout de l'état pour le modal
  const [selectedUser, setSelectedUser] = useState(null); // Ajout de l'état pour stocker les données de l'utilisateur sélectionné
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (term) => {
    const filtered = users.filter((user) =>
      Object.values(user).some(
        (value) => value && value.toString().toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredUsers(filtered);
  };

  const handleUpdate = (id, username, email, password, roles) => {
    // Mettez à jour l'état de l'utilisateur sélectionné
    setSelectedUser({ id, username, email, password, roles });
    // Affichez le modal
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleAddUser = (username, email, password, roles) => {
    dispatch(addUser(username, email, password, roles));
  };

  const handleEditModalClose = () => {
    // Fermez le modal et réinitialisez l'utilisateur sélectionné
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleEditSubmit = (formData) => {
    // Utilisez les données du formulaire pour mettre à jour l'utilisateur
    dispatch(updateUser(selectedUser.id, formData.username, formData.email, formData.password, formData.roles));
    // Fermez le modal
    setShowEditModal(false);
    // Réinitialisez l'utilisateur sélectionné
    setSelectedUser(null);
  };

  const headers = ['Nom', 'Email', 'Roles', 'Status', 'Date', '`modifier`', '`supprimer`', '`détails`'];
  const columns = ['username', 'email', 'roles', 'isConnected', 'isConnected' === 1 ? 'connectedDate' : 'disconnectedDate', 'modifier', 'supprimer', 'détails'];

  return (
    <>
      <h1>Liste des utilisateurs</h1>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {error && <p className="text-danger">{error}</p>}
          <SearchUserComponent onSearch={handleSearch} />
          <TableComponent
            data={filteredUsers.length > 0 ? filteredUsers : users}
            headers={headers}
            columns={columns}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onAddUser={handleAddUser}
          />

          {/* Utilisez ModalForm avec les données de l'utilisateur sélectionné */}
          <ModalForm
            show={showEditModal}
            onHide={handleEditModalClose}
            onSubmit={handleEditSubmit}
            userData={selectedUser}
            modalTitle="Modifier l'utilisateur"
          />
        </>
      )}
    </>
  );
}

export default UserScreen;
