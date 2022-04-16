//______________________________________________________________________________
const { DataTypes } = require("sequelize");
//______________________________________________________________________________

/*Aquí se crea un modelo para guardar la información de las actividades en la base de datos.*/

module.exports = (sequelize) => {
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
    { timestamps: false }
  );
};
