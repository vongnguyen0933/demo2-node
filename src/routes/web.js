
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
})
router.get('/abc', (req, res) => {
    res.send('Check ABC')
})

module.exports = router;