const router = require('express').Router()


router.get('/home',(req, res) => {
    return res.send('Home screen');
})

router.get('/login',(req, res) => {
    return res.send('Login screen');
})
module.exports = router