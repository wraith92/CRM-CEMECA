const db =require('../models');
const User = db.User;

exports.findAll = (req, res) => {
    User.findAll()
        .then(data => {
        res.send({message:'Liste des utilisateurs :)',data});
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
        });
        });
    }   
exports.findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await User.findByPk(id);
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération de l'utilisateur."
      });
    }
  } 