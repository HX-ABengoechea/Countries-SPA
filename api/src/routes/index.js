//______________________________________________________________________________
const { Router } = require("express");
//______________________________________________________________________________

/*A continuación importaré las rutas modularizadas.*/
const allCountriesRouter = require("./getAllCountries");
const countryIdRouter = require("./getCountryById");
const activityRouter = require("./postActivity");
const allActivitiesRouter = require("./getAllActivities");

const router = Router();

/*Aquí haré la configuración final de los routers*/
router.use("/countries", allCountriesRouter);
router.use("/countries", activityRouter);
router.use("/countries", countryIdRouter);
router.use("/allact", allActivitiesRouter);

module.exports = router;
