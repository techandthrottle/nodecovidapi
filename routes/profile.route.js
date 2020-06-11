const router = require('express').Router();
const bcrypt = require('bcrypt');
const checkAuth = require('../middleware/auth');

const profilerController = require('../controller/profile.controller');

let Profiles = require('../models/profile.model');

router.route('/detail/:username').get(checkAuth, profilerController.profile_get_user);
router.route('/all').get(checkAuth, profilerController.profile_get_all_user);
router.route('/register').post(profilerController.profile_register)
router.route('/:username').delete(checkAuth, profilerController.profile_delete);
router.route('/:username').post(checkAuth, profilerController.profile_update);

module.exports = router;