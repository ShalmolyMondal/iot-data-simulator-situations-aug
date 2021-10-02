const router = require("express").Router();
const Situation = require('../../models/Situation');

// '/api/situation/create' route
router.post('/', (req, res) => {
    const situation = new Situation({
        title: req.body.title,
        description: req.body.description,
    });
    
    situation.save()
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
});

module.exports = router;
