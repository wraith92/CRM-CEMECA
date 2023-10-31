const db = require("../models");
const Role = db.Role;

exports.findAll = (req, res) => {
    Role.findAll()
        .then(data => {
        res.send({message:'Liste des roles :)',data});
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Une erreur s'est produite lors de la récupération des roles."
        });
        });
    }
exports.findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Role.findByPk(id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération du role."
      });
    }
  }