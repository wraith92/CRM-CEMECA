import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

function UserScreen() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    console.log(users);

    return (
        <div>
            <h1>Liste des Utilisateurs</h1>
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <>
                    {error && <p className="text-danger">{error}</p>}
                    {users.map((user) => (
                        <div key={user.id}>
                            <p>ID : {user.id}</p>
                            <p>Nom d'utilisateur : {user.username}</p>
                            <p>Email : {user.email}</p>
                            <p>Date de création : {user.createdAt}</p>
                            {/* Ajoutez d'autres détails si nécessaire */}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
}

export default UserScreen;
