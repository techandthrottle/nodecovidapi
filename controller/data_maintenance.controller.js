const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('../PHCovid19API.json')

const doc = new GoogleSpreadsheet('16g_PUxKYMC0XjeEKF6FPUBq2-pFgmTkHoj5lbVrGLhE')

let SummaryCases = require('../models/covid_data_summary.models')

async function getCaseSummaryToDB(){
    await doc.useServiceAccountAuth(creds)
    await doc.loadInfo()

    //0 = DOH DATA DROP     1 = Cases       2 = Historical
    const sheet = doc.sheetsByIndex[2]
    const rows = await sheet.getRows()

    rows.forEach(row => {
        if(typeof row.Cases != 'undefined'){
            const date_recorded = row['Date']
            const total_cases = row['Cases']
            const death_count = row['Deaths']
            const recovery_count = row['Recoveries']
            const daily_test_conducted = row['Test Conducted PUI']
            const total_test_conducted = row['Total Test Conducted']
            const daily_case_recorded = row['Daily Case Increase']
            const daily_death_recorded = row['Daily Death']
            const daily_recovery_recorded = row['Daily Recovery']
            const admitted = row['Admitted']

            SummaryCases.findOne({ date_recorded : row['Date'] })
            .then(date => {
                if(!date){
                    const newCase = new SummaryCases({
                        date_recorded,
                        total_cases,
                        death_count,
                        recovery_count,
                        daily_test_conducted,
                        total_test_conducted,
                        daily_case_recorded,
                        daily_death_recorded,
                        daily_recovery_recorded,
                        admitted
                    })
                    SummaryCases.create(newCase)
                }
            })
            .catch(err => {
                console.log("Error: " + err)
            })
        }
    })

    await console.log("All data are saved")
}


exports.covid_summary = (req, res) => {
    getCaseSummaryToDB()
}
