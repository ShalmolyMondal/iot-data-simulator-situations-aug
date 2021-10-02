const router = require("express").Router();
const Situation = require("../../models/Situation");


router.get('/', (req, res) => {
    res.send("We are on get");
});


module.exports = router;