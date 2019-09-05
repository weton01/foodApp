const repository = require("../repositories/produto-repository");

const _repo = new repository();
function produtoController() {}

produtoController.prototype.post = async (req, res) => {
  let resultado = await _repo.create(req.body);
  res.status(200).send(resultado);
};

produtoController.prototype.put = async (req, res) => {
  let resultado = await _repo.update(req.params.id, req.body);
  res.status(202).send(resultado);
};

produtoController.prototype.get = async (req, res) => {
  let resultado = await _repo.getAll();
  res.status(200).send(resultado);
};

produtoController.prototype.getId = async (req, res) => {
  let resultado = await _repo.getById(req.params.id);
  res.status(200).send(resultado);
};

produtoController.prototype.delete = async (req, res) => {
  await _repo.delete(req.params.id);
  res.status(204).send();
};

module.exports = produtoController;
