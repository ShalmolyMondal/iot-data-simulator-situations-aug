const router = require("express").Router();
const addSituation = require("./AddSituation");
const getAllSituation = require("./GetAllSituations");

router.use("/create", addSituation);
router.use("/all", getAllSituation);

module.exports = router;
