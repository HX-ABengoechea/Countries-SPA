//______________________________________________________________________________
const { DataTypes } = require("sequelize");
//______________________________________________________________________________

/*Aquí se crea un modelo para guardar la información de los países en la base de datos.*/

module.exports = (sequelize) => {
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [3],
        },
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      population: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
