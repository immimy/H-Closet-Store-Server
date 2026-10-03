const express = require('express');
const { dbAlive, pingServer } = require('../controllers/health');
const router = express.Router();

router.route('/').get(pingServer);
router.route('/db').get(dbAlive);

module.exports = router;
