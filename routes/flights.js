const express = require('express')
const router = express.Router()

/* Fetch best path */
router.get('/shortest-route', (req, res) => {
    res.json({ route: 'best routesss' })
});

module.exports = router