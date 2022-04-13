//______________________________________________________________________________
const { getCountryById } = require("./controladores/controlGetCountryById");
const router = require("express").Router();
//______________________________________________________________________________

router.get("/:id", getCountryById);

module.exports = router;
