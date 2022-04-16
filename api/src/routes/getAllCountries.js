//______________________________________________________________________________
const { getAllCountries } = require("./controladores/controlGetAllCountries");
const router = require("express").Router();
//______________________________________________________________________________

/*Ruta de todos los países, y país por nombre.*/

router.get("/", getAllCountries);

module.exports = router;
