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
      allowNull: true,
    },
    Centres: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Intitulededocument: {
      type: DataTypes.STRING,
      values: ["PA", "PDAR", "SDAU"],
      allowNull: true,
    },

    Responsables: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Collaborateurs: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    Bet: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    Situation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Phase: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Obsrevations: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Observations_chef_département: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Pièces_jointes: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  });

  return Document;
};
