//______________________________________________________________________________
const { Activity, Op } = require("../../db");
//______________________________________________________________________________

/*Este es el callback de la ruta para obtener todas las actividades creadas.*/
const deleterOfActs = async (req, res) => {
  /*Hacemos un Try / Catch para facilitar la búsqueda de un error.*/
  try {
    const { value } = req.body;

    if (value) {
      await Activity.destroy({ where: { name: { [Op.iLike]: `%${value}%` } } });
      const allActivities = await Activity.findAll();
      if (allActivities) {
        res.json(allActivities);
      } else {
        res.status(404).json({ message: "No se han encontrado actividades." });
      }
    }

    /*Si hay actividades, que se dispongan como respuesta con status Ok.*/
  } catch (err) {
    console.log(err);
  }
};

module.exports = { deleterOfActs };
