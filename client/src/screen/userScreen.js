import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import TableComponent from '../components/TableComponent';
import SearchUserComponent from '../components/SearchComponent';
function UserScreen() {
    const dispatch = useDispatch();
    const [filteredUsers, setFilteredUsers] = React.useState([]);
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

    const headers = ['#', 'Username', 'Email', 'Roles'];
    const columns = ['id', 'username', 'email', 'roles'];

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
                    <TableComponent data={filteredUsers.length > 0 ? filteredUsers : users} headers={headers} columns={columns} />
                </>
            )}
        </>
    );
}

export default UserScreen;
