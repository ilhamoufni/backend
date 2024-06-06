const Sequelize = require("sequelize");
const sequelize = require("../Config/Dbconfig");

const User = require("./userModels")(sequelize, Sequelize.DataTypes);
const Document = require("./DocumentModels")(sequelize, Sequelize.DataTypes);

const db = {
  User,
  Document,
  Sequelize,
  sequelize,
};

module.exports = db;
