import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listInterlocuteur } from '../actions/interlocuteurAction';
import TableComponent from '../components/TableComponent';
import SearchComponent from '../components/SearchComponent';
import Loader from '../components/Loader';
function InterlocuteurScreen() {
    const dispatch = useDispatch();
    const interlocuteurs = useSelector((state) => state.interlocuteurs.interlocuteurs);
    console.log(interlocuteurs);
    const loading = useSelector((state) => state.actions.loading);
    const error = useSelector((state) => state.actions.error);
   const [searchTerm, setSearchTerm] = useState('');
   const [filterInterlocuteur, setfilterInterlocuteur] = useState([]);
    useEffect(() => {
        dispatch(listInterlocuteur());
    }, [dispatch]);


    const headers = ['ID', 'Nom', 'Prenom', 'Email', 'Telephone', 'Fonction', 'Societe'];
    const columns = ['id', 'nom', 'prenom', 'email', 'telephone', 'fonction', 'societe'];
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== '') {
            const newInterlocuteurList = interlocuteurs.filter((interlocuteur) => {
            return Object.values(interlocuteur)
                .join(' ')
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            });
            setfilterInterlocuteur(newInterlocuteurList);
        } else {
            setfilterInterlocuteur(interlocuteurs);
        }
        }
  return (
    <div>
      <h1>Liste Interlocuteurs</h1>
       {loading ? (
            <Loader/>
    ) : (
        <>
            {error && <p className="text-danger">{error}</p>}
        <SearchComponent onSearch={handleSearch} />
        <TableComponent data={filterInterlocuteur.length >0 ? filterInterlocuteur : interlocuteurs} headers={headers} columns={columns} />
        </>
      )}

    </div>
  )
}

export default InterlocuteurScreen
