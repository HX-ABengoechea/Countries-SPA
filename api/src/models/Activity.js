//______________________________________________________________________________
const { DataTypes } = require("sequelize");
//______________________________________________________________________________

/*Exportamos una funcion que define el modelo, para después inyectar la conexion a sequelize.*/
module.exports = (sequelize) => {
  /*Defino el modelo.*/
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1,
        },
      },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
        allowNull: false,
      },
    },
    /*Con esto restringimos atributos que no me interesaa tener.*/
    { timestamps: false }
  );
};
