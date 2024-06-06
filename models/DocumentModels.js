// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = require("../Config/Dbconfig")
// class Document extends Model {}

// Document.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true

//     },
//     Province: {
//         type: DataTypes.STRING,
//         values: ['Beni Mellal', 'Khouribga','Azilal','Fequih Ben Saleh'],
//     },

//     Communes: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },

//     Intitulededocument: {
//         type: DataTypes.STRING,
//         values: ['PA', 'PDAR','SDAU'],
//         allowNull: false
//     },

//     Responsables: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Collaborateurs: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },

//     Bet: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },

//     Situation: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Obsrevations: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     Document: {
//         type: DataTypes.BLOB,
//         allowNull: false
//     },

// },{
//     sequelize:sequelize,
//     modelName:"document"
// })

// module.exports = Document

module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define("Document", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Provinces: {
      type: DataTypes.STRING,
      values: ["Beni Mellal", "Khouribga", "Azilal", "Fequih Ben Saleh"],
    },

    Communes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Centres:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    Intitulededocument: {
      type: DataTypes.STRING,
      values: ["PA", "PDAR", "SDAU"],
      allowNull: false,
    },

    Responsables: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Collaborateurs: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Bet: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Situation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Obsrevations: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Observations_chef_département:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Pièces_jointes:{
      type: DataTypes.BLOB,
      allowNull: false,
    }
  });

  return Document;
};
