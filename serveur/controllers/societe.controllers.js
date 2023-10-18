const db = require("../models");
const Societe = db.societe;

exports.create_societe = (req, res) => {
    // Create a societes
    const societe = {
      siret: req.body.siret,
      siren: req.body.siren,
      nom_soc:req.body.nom_soc,
      nom_responsable_soc: req.body.nom_responsable_soc,
      annee_soc:req.body.annee_soc,
      date_creation_soc:req.body.date_creation_soc,
      activite_soc:req.body.activite_soc,
      libelle_naf:req.body.libelle_naf,
      ville_soc:req.body.ville_soc,
      pays:req.body.pays,
      adresse_local:req.body.adresse_local,
      code_postal:req.body.code_postal,
      syndicat:req.body.syndicat,
      observation:req.body.observation,
      tel:req.body.tel,
      app_cemeca:req.body.app_cemeca,
      app_sofitech:req.body.app_sofitech,
      soc_cemeca: req.body.soc_cemeca,
      soc_sofitech: req.body.soc_sofitech,
      id_role: req.body.id_role,
      id_utili: req.body.id_utili,
      origineprospect:req.body.origineprospect
    };
    // Save Tutorial in the database
    Societe.create(societe)
      .then(data => {
        res.send({message:'société ajouter avec succès :)',data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
exports.findAll = async (req, res) => {
    try {
      const data = await Societe.findAll();
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des sociétés."
      });
    }
  };
  exports.findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Societe.findByPk(id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération de la société."
      });
    }
  }
  exports.update = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Societe.update(req.body, { where: { id } });
      res.send({ message: 'Société modifiée avec succès :)', data });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la modification de la société."
      });
    }
  }
  exports.delete = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Societe.destroy({ where: { id } });
      res.send({ message: 'Société supprimée avec succès :)', data });
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la suppression de la société."
      });
    }
  }
  
  
  