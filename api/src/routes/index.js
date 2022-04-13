//______________________________________________________________________________
const { Router } = require("express");
//______________________________________________________________________________

const allCountriesRouter = require("./getAllCountries");
const countryIdRouter = require("./getCountryById");
const activityRouter = require("./postActivity");
const allActivitiesRouter = require("./getAllActivities");

const router = Router();

router.use("/countries", allCountriesRouter);
router.use("/countries", activityRouter);
router.use("/countries", countryIdRouter);
router.use("/allact", allActivitiesRouter);

module.exports = router;
