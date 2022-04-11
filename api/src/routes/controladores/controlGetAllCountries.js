//______________________________________________________________________________
const { Country, Activity, Op } = require("../../db");
//______________________________________________________________________________

/*La función getAllCountries se encarga de dos cosas. Primero se fija si hay un query por parámetro.
En ese caso, envía el país específico. De lo contrario envía todos los países.*/
const getAllCountries = async (req, res) => {
  /*Hacemos un Try / Catch para facilitar la búsqueda de un error.*/

  try {
    /*Consulto si existe un query por url llamado name.*/
    const { name } = req.query;

    /*Si existe, lo busco en la base de datos y lo envío.*/
    if (name) {
      const pais = await Country.findOne({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      });
      if (pais) {
        res.json(pais);
      } else {
        /*Si no existe, envío un error.*/
        res.json({ mal: 404 });
      }

      /*En caso de que no haya un nombre por query, envío una lista con todos los paises.*/
    } else {
      const allCountries = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      });
      if (allCountries) {
        return res.json(allCountries);
      } else {
        return res.status(404).json({ message: "No se han encontrado paises" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllCountries };
