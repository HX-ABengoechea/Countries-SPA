//______________________________________________________________________________
const { getAllActivities } = require("./controladores/controlGetAllActivities");
const router = require("express").Router();
//______________________________________________________________________________

/*Ruta de todas las actividades.*/

router.get("/", getAllActivities);

module.exports = router;
