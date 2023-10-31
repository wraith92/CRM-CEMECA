import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSocietes } from '../actions/societeActions';
import TableComponent from '../components/TableComponent';
import SearchComponent from '../components/SearchComponent';
import { Spinner } from 'react-bootstrap';

function SocieteScreen() {
    const dispatch = useDispatch();
    const [filteredSocietes, setFilteredSocietes] = React.useState([]);
    const societes = useSelector(state => state.societes.societes);
    const loading = useSelector(state => state.societes.loading);
    const error = useSelector(state => state.societes.error);
    console.log(societes);
    useEffect(() => {
        dispatch(fetchSocietes());
    }, [dispatch]);
    const handleSearch = (term) => {
      const filtered = societes.filter((societe) =>
        Object.values(societe).some(
          (value) => value && value.toString().toLowerCase().includes(term.toLowerCase())
        )
      );
      setFilteredSocietes(filtered);
    };

    const headers = ['#', 'SIRET', 'SIREN', 'Nom', 'Nom responsable', 'Année', 'Date création', 'Activité', 'Libellé NAF', 'Ville'];
    const columns = ['id', 'siret', 'siren', 'nom_soc', 'nom_responsable_soc', 'annee_soc', 'date_creation_soc', 'activite_soc', 'libelle_naf', 'ville_soc'];
    return (
        <div>
            <h1>Liste des sociétés</h1>
            {loading ? (
             <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
           </Spinner>
        ) : (
            <>
                {error && <p className="text-danger">{error}</p>
                }
                <SearchComponent onSearch={handleSearch} />
                <TableComponent data={filteredSocietes.length > 0 ? filteredSocietes : societes} headers={headers}  columns={columns}/>
            </>
        )}
        </div>
    );
}

export default SocieteScreen;
