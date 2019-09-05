require("../models/produto-model");
const mongoose = require("mongoose");
const ProdutoModel = mongoose.model("Produto");

function produtoRepository() {}

produtoRepository.prototype.create = async data => {
  let resultado = new ProdutoModel(data);
  await resultado.save();
  return resultado;
};

produtoRepository.prototype.update = async (id, data) => {
  await ProdutoModel.findByIdAndUpdate(id, { $set: data });
  return await ProdutoModel.findById(id);
};

produtoRepository.prototype.getAll = async () => {
  return await ProdutoModel.find();
};

produtoRepository.prototype.getById = async id => {
  return await ProdutoModel.findById(id);
};

produtoRepository.prototype.delete = async id => {
  return await ProdutoModel.findByIdAndRemove(id);
};

module.exports = produtoRepository;
