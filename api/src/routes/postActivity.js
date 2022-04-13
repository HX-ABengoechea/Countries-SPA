//______________________________________________________________________________
const router = require("express").Router();
const { postActivity } = require("./controladores/controlPostActivity");
//______________________________________________________________________________

router.post("/activity", postActivity);

module.exports = router;
