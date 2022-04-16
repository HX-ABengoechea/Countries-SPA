//______________________________________________________________________________
const { Activity, Country } = require("../../db");
//______________________________________________________________________________

/*Este callback se encarga de crear una nueva actividad y guardarla en la base de datos.*/

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if (name && difficulty && duration && season && countries) {
      const [instance] = await Activity.findOrCreate({
        where: {
          name: name,
          difficulty: difficulty,
          duration: duration,
          season: season,
        },
      });

      countries.forEach(async (name) => {
        const pais = await Country.findOne({ where: { name: name } });

        await pais.addActivity(instance);
      });

      return res.send("Actividad creada exitosamente!");
    } else {
      return res
        .status(400)
        .json({ message: "No se ha podido crear la actividad." });
    }
  } catch (err) {
    console.log("Hubo un error en POST postActivity.");
  }
};

module.exports = { postActivity };
