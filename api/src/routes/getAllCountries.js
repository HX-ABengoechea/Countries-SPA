//______________________________________________________________________________
const { getAllCountries } = require("./controladores/controlGetAllCountries");
const router = require("express").Router();
//______________________________________________________________________________

router.get("/", getAllCountries);

module.exports = router;
