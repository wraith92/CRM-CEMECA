exports.cemecaBoard = (req, res) => {
    res.status(200).send("Cemeca Content.");
}
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
}
exports.superAdminBoard = (req, res) => {
    res.status(200).send("Super Admin Content.");
}