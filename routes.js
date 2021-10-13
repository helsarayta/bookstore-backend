const akses = require("express").Router();
const BukuModel = require("./model.js");

akses.route("/").get((req, res, next) => {
  BukuModel.find()
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(400).json(err.message));
});

akses.route("/delete/:id").delete((req, res) => {
  BukuModel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Buku Berhasil Dihapus"))
    .catch((err) => res.status(400).json(err.message));
});

akses.route("/update/:id").put((req, res) => {
  BukuModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateBook) => res.status(200).json(updateBook))
    .catch((err) => res.status(400).json(err.message));
});

akses.route("/add").post((req, res) => {
  BukuModel.create(req.body)
    .then((createdBook) => res.status(200).json(createdBook))
    .catch((err) => res.status(400).json(err.message));
});
// coba konsumsinen api ne
module.exports = akses;
