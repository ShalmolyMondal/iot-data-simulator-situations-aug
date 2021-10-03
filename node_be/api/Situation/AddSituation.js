const router = require("express").Router();
const Situation = require('../../models/Situation');

// '/api/situation/create' route
router.post('/', async (req, res) => {
    const situation = new Situation(req.body.situationData);
    
    try {
        const situationCreated = await situation.save();
        res.status(201).json(situationCreated);
    } catch (err) {
        res.status(500).json({message: err});
    }
});

module.exports = router;
