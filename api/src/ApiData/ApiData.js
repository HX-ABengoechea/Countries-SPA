//______________________________________________________________________________
const axios = require("axios");
const { Country } = require("../db");
//______________________________________________________________________________

/*La función "apiCall" trae toda la información de la Api y la guarda en la base de datos.*/
const apiCall = async () => {
  /*Hacemos un Try / Catch para facilitar la búsqueda de un error.*/
  try {
    /*La constante "keepData" trae toda la información de la Api.*/

    const keepData = await axios.get(`https://restcountries.com/v3/all`);

    /*Con el siguiente map discriminaré la información de la Api que no necesito, y guardaré en la 
    base de datos la que si necesito.*/
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
