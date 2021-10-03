const router = require("express").Router();
const Situation = require("../../models/Situation");


router.get('/', async (req, res) => {
    try {
        const situations = await Situation.find();
        res.json(situations);
    } catch (err) {
        res.json({message: err});
    }
    
});


module.exports = router;