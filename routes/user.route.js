const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Profiles = require('../models/profile.model')
const userController = require('../controller/user.controller')

router.route('/login').post(userController.login)

module.exports = router;