const router = require('express').Router()

const operationController = require('../controller/operation.controller')

router.route('/total_death').get(operationController.get_total_death)
router.route('/total_recovery').get(operationController.get_total_recovery)
router.route('/total_cases').get(operationController.get_total_cases)
router.route('/active_cases').get(operationController.get_active_cases)
router.route('/daily_case_summary/:casedate').get(operationController.get_daily_case)
router.route('/daily_recovery_summary/:casedate').get(operationController.get_daily_recovery)
router.route('/daily_death_summary/:casedate').get(operationController.get_daily_deaths)
router.route('/summary_latest').get(operationController.get_summary)

module.exports = router