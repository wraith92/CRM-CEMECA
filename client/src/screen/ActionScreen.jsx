
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActions } from '../actions/actionAction';
import TableComponent from '../components/TableComponent';
import SearchComponent from '../components/SearchComponent';
import Loader from '../components/Loader';

function ActionScreen() {
    const dispatch = useDispatch();
    const actions = useSelector((state) => state.actions.actions);
    console.log(actions);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.actions.error);
   const [searchTerm, setSearchTerm] = useState('');
   const [filterAction, setfilterAction] = useState([]);
   const headers = ['ID', 'Date action', 'Description', 'Nom interlocuteur', 'Type action', 'Nom société', 'Date RDV', 'Validation', 'Besoin', 'Investissement', 'Montant', 'Date factor', 'Date assurance', 'Nom assureur', 'Nom factor', 'Crédit COP', 'Créé à', 'ID société', 'ID utilisateur'];
   const columns = ['id', 'date_action', 'description', 'nom_interlocuteur', 'type_action', 'nom_societe', 'date_rdv', 'validation', 'besoin', 'investissement', 'montant', 'date_factor', 'date_assur', 'nom_assur', 'nom_factor', 'credit_cop', 'createdAt', 'id_soc', 'id_utili'];
     useEffect(() => {
        dispatch(fetchActions());
    }, [dispatch]);
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        if (searchTerm !== '') {
            const newActionList = actions.filter((action) => {
            return Object.values(action)
                .join(' ')
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            });
            setfilterAction(newActionList);
        } else {
            setfilterAction(actions);
        }
        }
  return (
    <div>
        <h1>Liste Actions</h1>
         {loading ? (
           
            <Loader />
       
    ) : (
        <>
            {error && <p className="text-danger">{error}</p>}
            <SearchComponent onSearch={handleSearch} />
            <TableComponent data={filterAction.length >0 ? filterAction : actions} headers={headers} columns={columns} />
            </>
        )}
    </div>
  )
}

export default ActionScreen
