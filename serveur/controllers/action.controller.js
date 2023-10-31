const db = require("../models");
const Action = db.Action;

exports.create = async (req, res) => {
    try {
        const action = {
            nom_action: req.body.nom_action,
            description_action: req.body.description_action,
            id_projet: req.body.id_projet,
            
        };
        const data = await Action.create(action);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Une erreur s'est produite lors de la création de l'action."
        });
    }
}

exports.findAll = async (req, res) => {
    try {
        const data = await Action.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la récupération des actions."
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Action.findByPk(id);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la récupération de l'action."
        });
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Action.update(req.body, { where: { id } });
        res.send({ message: 'Action modifiée avec succès :)', data });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la modification de l'action."
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Action.destroy({ where: { id } });
        res.send({ message: 'Action supprimée avec succès :)', data });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la suppression de l'action."
        });
    }
}