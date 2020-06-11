const router = require('express').Router();

const covidController = require('../controller/data_maintenance.controller');


router.route('/maintenance/summary').get(covidController.covid_summary);
router.route('/maintenance/datadrop').get(covidController.covid_doh_data_drop);

module.exports = router;