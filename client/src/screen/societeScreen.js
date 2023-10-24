import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

function UserScreen() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    console.log(users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>Liste des Utilisateurs</h1>
            {loading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                users.map((user) => (
                    <div key={user.id}>
                        <p>Nom: {user.username}</p>
                        <p>Prénom: {user.email}</p>
                        {/* Autres détails de la société */}
                    </div>
                ))
            )}
        </div>
    );
}

export default UserScreen;
