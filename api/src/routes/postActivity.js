//______________________________________________________________________________
const router = require("express").Router();
const { postActivity } = require("./controladores/controlPostActivity");
//______________________________________________________________________________

/*Aquí creo una ruta específica.*/
router.post("/activity", postActivity);

module.exports = router;
