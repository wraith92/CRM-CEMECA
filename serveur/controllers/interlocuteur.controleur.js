const db = require("../models");
const Interlocuteur = db.Interlocuteur;
const Societe = db.Societe;

exports.create = async (req, res) => {
    try {
        const interlocuteur = {
            nom_interlocuteur: req.body.nom_interlocuteur,
            prenom_interlocuteur: req.body.prenom_interlocuteur,
            fonction_interlocuteur: req.body.fonction_interlocuteur,
            tel_interlocuteur: req.body.tel_interlocuteur,
            email_interlocuteur: req.body.email_interlocuteur,
            id_societe: req.body.id_societe
        };
        const data = await Interlocuteur.create(interlocuteur);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Une erreur s'est produite lors de la création de l'interlocuteur."
        });
    }
}

exports.findAll = async (req, res) => {
    try {
        const data = await Interlocuteur.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la récupération des interlocuteurs."
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Interlocuteur.findByPk(id);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la récupération de l'interlocuteur."
        });
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Interlocuteur.update(req.body, { where: { id } });
        res.send({ message: 'Interlocuteur modifié avec succès :)', data });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la modification de l'interlocuteur."
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Interlocuteur.destroy({ where: { id } });
        res.send({ message: 'Interlocuteur supprimé avec succès :)', data });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la suppression de l'interlocuteur."
        });
    }
}