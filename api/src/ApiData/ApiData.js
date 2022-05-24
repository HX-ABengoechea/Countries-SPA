//______________________________________________________________________________
const axios = require("axios");
const { Country } = require("../db");
//______________________________________________________________________________

/*Aquí se trae toda la información de la API, se la discrimina y se la envía a la base de datos.*/
const apiCall = async () => {
  try {
    const keepData = await axios(`https://restcountries.com/v3/all`);

    keepData.data.map(async (pais) => {
      await Country.findOrCreate({
        where: {
          id: pais.cca3,
          name: pais.name.official,
          flag: pais.flags[0],
          continent: pais.region,
          capital: pais.capital
            ? pais.capital[0]
            : "Esta capital no está registrada.",
          subregion: pais.subregion
            ? pais.subregion
            : "Esta subregión no está registrada.",
          area: pais.area,
          population: pais.population,
        },
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { apiCall };

