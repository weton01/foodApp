const mongoose = require("mongoose");
const CategoriaModel = mongoose.model("Categoria");

class categoriaRepository {
  constructor() {}

  async create(data) {
    let categoria = new CategoriaModel(data);
    await categoria.save();
    return categoria;
  }

  async update(id, data) {
    await CategoriaModel.findByIdAndUpdate(id, { $set: data });
    return await CategoriaModel.findById(id);
  }

  async getAll() {
    return await CategoriaModel.find();
  }

  async getById(id) {
    return await CategoriaModel.findById(id);
  }

  async delete(id) {
    return await CategoriaModel.findByIdAndRemove(id);
  }
}

module.exports = categoriaRepository;
