//______________________________________________________________________________
const { Country, Activity, Op } = require("../../db");
//______________________________________________________________________________

/*La función getCountryById se encarga de enviar un país específico pedido mediante parámetro.*/
const getCountryById = async (req, res) => {
  /*Hacemos un Try / Catch para facilitar la búsqueda de un error.*/
  try {
    /*Guardo el id pasado como parámetro.*/
    const { id } = req.params;

    /*Pregunto si se recibió o no el parámetro.*/
    if (id) {
      /*Aquí traigo el país específico pedido por parámetro incluyendo sus actividades turísticas.*/
      let pais = await Country.findOne({
        where: { id: { [Op.iLike]: `%${id}%` } },
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      });
      /*En el caso de que exista el país solicitado se envía. Caso contrario se envía un error.*/
      if (pais) {
        return res.json(pais);
      } else {
        return res.status(404).json({ message: "El país no fue encontrado." });
      }
    } else {
      return res.status(404).json({ message: "El país no fue encontrado." });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getCountryById };
