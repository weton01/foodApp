const variables = {
  Api: {
    port: process.env.port || 3000
  },
  Databade: {
    connection:
      process.env.connection ||
      "mongodb+srv://weton01:Dragonite1@cluster0-aqqnt.mongodb.net/test?retryWrites=true&w=majority"
  }
};

module.exports = variables;
