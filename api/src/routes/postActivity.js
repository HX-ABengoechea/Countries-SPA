//______________________________________________________________________________
const router = require("express").Router();
const { postActivity } = require("./controladores/controlPostActivity");
//______________________________________________________________________________

/*Ruta de creación de actividades.*/

router.post("/activity", postActivity);

module.exports = router;
