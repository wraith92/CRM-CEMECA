import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSocietes } from '../actions/societeActions';

const SocieteScreen = ({ fetchSocietes, societes }) => {
  useEffect(() => {
    fetchSocietes();
  }, [fetchSocietes]);

  return (
    <div>
      <h1>Liste des Sociétés</h1>
      {societes.map((societe) => (
        <div key={societe.id}>
          <p>SIRET: {societe.siret}</p>
          {/* Autres détails de la société */}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    societes: state.societes.societes, // Assurez-vous que c'est le nom correct du reducer
  };
};

export default connect(mapStateToProps, { fetchSocietes })(SocieteScreen);
