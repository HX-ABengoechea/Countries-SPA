//______________________________________________________________________________
const { Country, Activity, Op } = require("../../db");
//______________________________________________________________________________

/*Este callback se encarga de dos cosas. Primero se fija si hay un query por parámetro.
En ese caso, envía el país específico. De lo contrario envía todos los países.*/
const getAllCountries = async (req, res) => {
  try {
    const { name } = req.query;

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
        res.json({ mal: 404 });
      }
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
