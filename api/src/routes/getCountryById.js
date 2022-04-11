//______________________________________________________________________________
const { getCountryById } = require("./controladores/controlGetCountryById");
const router = require("express").Router();
//______________________________________________________________________________

/*Aquí creo una ruta específica.*/
router.get("/:id", getCountryById);

module.exports = router;
