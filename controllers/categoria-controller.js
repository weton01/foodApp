require("../models/categoria-model");
const repository = require("../repositories/categoria-repository");

function categoriaController() {}

categoriaController.prototype.post = async (req, res) => {
  let resultado = await new repository().create(req.body);
  res.status(200).send(resultado);
};

categoriaController.prototype.put = async (req, res) => {
  let resultado = await new repository().update(req.params.id, req.body);
  res.status(202).send(resultado);
};

categoriaController.prototype.get = async (req, res) => {
  let resultado = await new repository().getAll();
  res.status(200).send(resultado);
};

categoriaController.prototype.getById = async (req, res) => {
  let resultado = await new repository().getById(req.params.id);
  res.status(200).send(resultado);
};

categoriaController.prototype.delete = async (req, res) => {
  await new repository().delete(req.params.id);
  res.status(204).send();
};

module.exports = categoriaController;
