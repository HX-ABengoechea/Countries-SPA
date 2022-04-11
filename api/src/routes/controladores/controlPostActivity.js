//______________________________________________________________________________
const { Activity, Country } = require("../../db");
//______________________________________________________________________________

/*La función postActivity se encarga de crear una nueva actividad en la base de datos.*/
const postActivity = async (req, res) => {
  /*Hacemos un Try / Catch para facilitar la búsqueda de un error.*/
  try {
    /*Adiquiero la información traida por req.*/
    const { name, difficulty, duration, season, countries } = req.body;

    /*Verfico que todos existan.*/
    if (name && difficulty && duration && season && countries) {
      /*Creo una nueva actividad en la base de datos.*/
      const [instance] = await Activity.findOrCreate({
        where: {
          name: name,
          difficulty: difficulty,
          duration: duration,
          season: season,
        },
      });

      /*Por cada país traido en req.body, le asignaremos la neuva actividad turística.*/
      countries.forEach(async (name) => {
        const pais = await Country.findOne({ where: { name: name } });

        await pais.addActivity(instance);
      });

      return res.send("Actividad creada exitosamente!");
    } else {
      /*En caso de que falte información, retornaremos un error*/
      return res
        .status(400)
        .json({ message: "No se ha podido crear la actividad." });
    }
  } catch (err) {
    console.log("Hubo un error en POST postActivity.");
  }
};

module.exports = { postActivity };
