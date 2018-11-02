let express = require('express')
let router = express.Router()

router.get('/person', (req, res) => {
    res.send('you have a request a person')
});

module.exports = router