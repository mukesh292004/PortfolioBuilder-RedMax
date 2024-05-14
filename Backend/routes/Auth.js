const express = require('express');
const router = express.Router();
const {login,signup,files,portfolios} = require('./Authcontroller');
router.post('/login',login);
router.post('/signup',signup);
router.get('/files/:filename', files)
router.post('/portfolios', portfolios)
module.exports = router;

