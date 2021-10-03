const router = require("express").Router();
const situationRoutes = require("./Situation");

router.get("/", (req, res) => {
	res.status(200).send("Succesful get to /api route");
});

router.use("/situation", situationRoutes);

module.exports = router;
