//______________________________________________________________________________
const { getAllActivities } = require("./controladores/controlGetAllActivities");
const router = require("express").Router();
//______________________________________________________________________________

router.get("/", getAllActivities);

module.exports = router;
