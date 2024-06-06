const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require ("../Config/Dbconfig")
class User extends Model {}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM,
      values: ["chef de département", "admin", "user"],
      defaultValue: "user",
    },
  });

  return User;
};

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },

//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     role: {
//       type: DataTypes.ENUM,
//       values: ["chef de département", "admin", "user"],
//       defaultValue: "user",
//     },
//   },
//   {
//     sequelize: sequelize,
//     modelName: "User",
//   }
// );

// module.exports = User
