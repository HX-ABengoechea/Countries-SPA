//______________________________________________________________________________
const { getCountryById } = require("./controladores/controlGetCountryById");
const router = require("express").Router();
//______________________________________________________________________________

/*Ruta de países por id.*/

router.get("/:id", getCountryById);

module.exports = router;
