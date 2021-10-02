const router = require('express').Router();
const apiRoutes = require('./routes');

// API Routes any route starting with '/api'
router.use('/api', apiRoutes);

module.exports = router;