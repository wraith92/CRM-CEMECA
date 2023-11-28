export const fields = [
    { name: 'username', label: 'Username', placeholder: 'Enter username' },
    { name: 'email', label: 'Email', placeholder: 'Enter email' },
    { name: 'password', label: 'Password', placeholder: 'Enter password', type: 'password' },
    { name: 'confirmPassword', label: 'Confirm Password', placeholder: 'Confirm password', type: 'password' },
    {
      name: 'role',
      label: 'Role',
      placeholder: 'Select role',
      type: 'select',
      options: [
        { value: 0, label: 'Choisir un Role' },
        { value: 1, label: 'Cemeca' },
        { value: 2, label: 'Admin' },
        { value: 3, label: 'Super Admin' },
      ],
    },
  ];
  