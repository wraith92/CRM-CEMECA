const db = require("../models");
const role = db.role;

exports.findAll = (req, res) => {
    role.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving role."
        });
    });
};