//______________________________________________________________________________
const { Country, Activity, Op } = require("../../db");
//______________________________________________________________________________

/*Este callback se encarga de enviar un país específico pedido mediante parámetro.*/
const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      let pais = await Country.findOne({
        where: { id: { [Op.iLike]: `%${id}%` } },
        include: {
          model: Activity,
          attributes: ["name", "difficulty", "duration", "season"],
          through: { attributes: [] },
        },
      });
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
