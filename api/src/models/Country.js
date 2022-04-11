//______________________________________________________________________________
const { DataTypes } = require("sequelize");
//______________________________________________________________________________

/*Exportamos una funcion que define el modelo, para después inyectar la conexion a sequelize.*/
module.exports = (sequelize) => {
  /*Defino el modelo.*/
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
    /*Con esto restringimos atributos que no me interesaa tener*/
    { timestamps: false }
  );
};
