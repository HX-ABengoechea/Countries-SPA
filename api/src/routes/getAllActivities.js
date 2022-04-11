//______________________________________________________________________________
const { getAllActivities } = require("./controladores/controlGetAllActivities");
const router = require("express").Router();
//______________________________________________________________________________

/*Aquí creo una ruta específica.*/
router.get("/", getAllActivities);

module.exports = router;
