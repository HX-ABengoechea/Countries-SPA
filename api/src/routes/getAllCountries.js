//______________________________________________________________________________
const { getAllCountries } = require("./controladores/controlGetAllCountries");
const router = require("express").Router();
//______________________________________________________________________________

/*Aquí creo una ruta específica.*/
router.get("/", getAllCountries);

module.exports = router;
