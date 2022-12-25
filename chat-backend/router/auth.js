const router = require('express').Router()
const {login, register} = require('../controllers/authController')
const {validate} = require('../validators')
const {body} = require('express-validator')
const {rules: registerRules} = require('../validators/auth/register')
const {rules: loginRules} = require('../validators/auth/login')
router.post('/login',[loginRules, validate ], login)

router.post('/register',[registerRules, validate], register)
module.exports = router 