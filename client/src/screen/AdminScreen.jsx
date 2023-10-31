import React from 'react'
import GenericForm from '../components/GenericForm';
import FormContainer from '../components/FormContainer';
function AdminScreen() {
    const fields = [
        { name: 'username', label: 'Username', placeholder: 'Enter username' },
        { name: 'email', label: 'Email', placeholder: 'Enter email' },
        { name: 'password', label: 'Password', placeholder: 'Enter password', type: 'password' },
      ];
      const handleSubmit = (formData) => {
        // Gérer la soumission du formulaire ici (envoyer les données au backend, etc.)
        console.log('Données soumises :', formData);
      };

    const AddUserForm = ({ onSubmit }) => {
        return <GenericForm fields={fields} onSubmit={onSubmit} />;
      };
  return (
    <div>
      <FormContainer>
      <h1>Ajouter un utilisateur</h1>
      <AddUserForm fields={fields} onSubmit={handleSubmit} />
    </FormContainer>
    </div>
  )
}

export default AdminScreen
