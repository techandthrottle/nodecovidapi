let SummaryCases = require('../models/covid_data_summary.models')

exports.get_total_death = (req, res) => {
    SummaryCases.findOne({  }).sort({ date_recorded: - 1 })
    .then(result => {
        if(result){
            let mongo_date = new Date(result.date_recorded)
            res.status(200).json({
                date_recorded : mongo_date.toLocaleDateString(),
                total_death : result.death_count,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                message: "No records found!"
            })
        }
    })
    .catch(err => {
        res.status(500).json({error : err})
    })
}

exports.get_total_recovery = (req, res) => {
    SummaryCases.findOne({  }).sort({ date_recorded : -1 })
    .then(result => {
        if(result){
            let mongo_date = new Date(result.date_recorded)
            res.status(200).json({
                date_recorded : mongo_date.toLocaleDateString(),
                total_recovery : result.recovery_count,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}

exports.get_total_cases = (req, res) => {
    SummaryCases.findOne({  }).sort({ date_recorded : -1 })
    .then(result => {
        if(result){
            let mongo_date = new Date(result.date_recorded)
            res.status(200).json({
                date_recorded : mongo_date.toLocaleDateString(),
                total_cases : result.total_cases,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}

exports.get_active_cases = (req, res) => {
    SummaryCases.findOne({  }).sort({ date_recorded : -1 })
    .then(result => {
        if(result){
            let mongo_date = new Date(result.date_recorded)
            res.status(200).json({
                date_recorded : mongo_date.toLocaleDateString(),
                active_cases : result.admitted,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}

exports.get_daily_case = (req, res) => {
    let case_date = req.params.casedate
    SummaryCases.findOne({ date_recorded : case_date })
    .then(result => {
        if(result){

            res.status(200).json({
                date_recorded : result.date_recorded.toLocaleDateString(),
                new_case : result.daily_case_recorded,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
        
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}

exports.get_daily_recovery = (req, res) => {
    let case_date = req.params.casedate
    SummaryCases.findOne({ date_recorded : case_date })
    .then(result => {
        if(result){
            res.status(200).json({
                date_recorded : result.date_recorded.toLocaleDateString(),
                daily_recovery : result.daily_recovery_recorded,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
        
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}

exports.get_daily_deaths = (req, res) => {
    let case_date = req.params.casedate
    SummaryCases.findOne({ date_recorded : case_date })
    .then(result => {
        if(result){
            res.status(200).json({
                date_recorded : result.date_recorded.toLocaleDateString(),
                daily_deaths : result.daily_death_recorded,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
        
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}

exports.get_summary = (req, res) => {
    SummaryCases.findOne({ }).sort({ date_recorded : -1 })
    .then(results => {
        if(results){
            res.status(200).json({
                case_date : results.date_recorded,
                total_case : results.total_cases,
                active_cases : results.admitted,
                total_deaths : results.death_count,
                total_recovery : results.recovery_count,
                new_case : results.daily_case_recorded,
                new_deaths : results.daily_death_recorded,
                new_recoveries : results.daily_recovery_recorded,
                add_info : {
                    "Get total number of death: " : "localhost:5000/covid/total_death",
                    "Get total number of recovery: " : "localhost:5000/covid/total_recovery",
                    "Get total number of cases: " : "localhost:5000/covid/total_cases",
                    "Get daily recorded case summary filter by date: " : "localhost:5000/covid/daily_case_summary/mm-dd-yyyy",
                    "Get daily recorded recovery summary filter by date: " : "localhost:5000/covid/daily_recovery_summary/mm-dd-yyyy",
                    "Get daily recorded deaths filter by date: " : "localhost:5000/covid/daily_death_summary/mm-dd-yyyy",
                    "Get latest case summary: " : "localhost:5000/covid/summary_latest"
                }
            })
        } else {
            res.status(500).json({
                "message" : "No Records found on the selected date!"
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            error : err
        })
    })
}
