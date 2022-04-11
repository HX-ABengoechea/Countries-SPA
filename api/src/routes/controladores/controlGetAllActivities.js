//______________________________________________________________________________
const { Activity } = require("../../db");
//______________________________________________________________________________

/*Este es el callback de la ruta para obtener todas las actividades creadas.*/
const getAllActivities = async (req, res) => {
  /*Hacemos un Try / Catch para facilitar la búsqueda de un error.*/
  try {
    /*Aquí traigo todas las actividades guardadas en la base de datos.*/
    const allActivities = await Activity.findAll();

    /*Si hay actividades, que se dispongan como respuesta con status Ok.*/
    if (allActivities) {
      res.json(allActivities);

      /*Si no hay actividades, que se responda con un status 404.*/
    } else {
      res.status(404).json({ message: "No se han encontrado actividades." });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllActivities };
