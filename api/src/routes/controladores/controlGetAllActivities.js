//______________________________________________________________________________
const { Activity } = require("../../db");
//______________________________________________________________________________

/*Este es el callback de la ruta para obtener todas las actividades creadas.*/

const getAllActivities = async (req, res) => {
  try {
    const allActivities = await Activity.findAll();

    if (allActivities) {
      res.json(allActivities);
    } else {
      res.status(404).json({ message: "No se han encontrado actividades." });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllActivities };
