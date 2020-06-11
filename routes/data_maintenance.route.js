const router = require('express').Router()

const data_maintenanceController = require('../controller/data_maintenance.controller.js')

router.route('/maintenance/summary').get(data_maintenanceController.covid_summary)

module.exports = router

