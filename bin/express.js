const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const variables = require("../bin/configuration/variables");

// Routers
const categoriaRouter = require("../routes/categoria-router");
const produtoRouter = require("../routes/produto-router");

// Invocando express
const app = express();

// Configuração de parse do JSON
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

mongoose.connect(variables.Databade.connection);

// Configurando as rotas
app.use("/api/categoria", categoriaRouter);
app.use("/api/produto", produtoRouter);

// Exportando nossa api
module.exports = app;
