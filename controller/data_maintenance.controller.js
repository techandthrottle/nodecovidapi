const { GoogleSpreadsheet } = require('google-spreadsheet')
const creds = require('../PHCovid19API.json');

const doc = new GoogleSpreadsheet('16g_PUxKYMC0XjeEKF6FPUBq2-pFgmTkHoj5lbVrGLhE');

let SummaryCases = require('../models/covid_data_summary.model');
let DOHDataDrop = require('../models/covid_data_drop.model');

async function getCasesSummaryDB() {
    await doc.useServiceAccountAuth(require('../PHCovid19API.json'))
    
    await doc.loadInfo()    
     
    const sheet = doc.sheetsByIndex[2]
    const rows = await sheet.getRows()

    rows.forEach(row => {
        if(typeof row.Cases != 'undefined'){
            const date_recorded = row["Date"]
            const total_cases = row["Cases"]
            const death_count = row["Deaths"]
            const recovery_count = row["Recoveries"]
            const daily_test_conducted = row["Test Conducted PUI"]
            const total_test_conducted = row["Total Test Conducted"]
            const daily_case_recorded = row["Daily Case Increase"]
            const daily_death_recorded = row["Daily Death"]
            const daily_recovery_recorded = row["Daily Recovery"]
            const admitted = row["Admitted"]
            SummaryCases.findOne({ date_recorded : row["Date"] })
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
                        admitted,
                    })

                    SummaryCases.create(newCase)
                    .then(result => {
                        console.log("Saving " + result)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
          
        }
    })

    await console.log("Done!!!")
}

async function getDOHDataDrop() {
    await doc.useServiceAccountAuth(require('../PHCovid19API.json'))
    
    await doc.loadInfo()    

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()
    

    rows.forEach(row => {
        const case_code = row["CaseCode"]
        const age = row["Age"]
        const age_group = row["AgeGroup"]
        const sex = row["Sex"]
        const date_confirm = row["DateRepConf"]
        const date_expire = row["DateDied"]
        const date_recover = row["DateRecover"]
        const removal_type = row["RemovalType"]
        const date_rep_rem = row["DateRepRem"]
        const admitted = row["Admitted"]
        const region_res = row["RegionRes"]
        const prov_res = row["ProvRes"]
        const city_res = row["ProvCityRes"]
        const mun_res = row["MunCityPSG"]
        const health_status = row["HealthStatus"]
        const is_quarantined = row["Quarantined"]
        const date_on_set = row["DateOnset"]
        const region_psgc = row["RegionPSGC"]
        const prov_psgc = row["ProvPSGC"]
        const location = row["Location"]
        const loc_lat = row["Latitude"]
        const loc_long = row["Longitude"]
        const island_group = row["Island Group"]

        DOHDataDrop.findOne({ case_code : row["CaseCode"] })
        .then(datas => {
            if(!datas){
                const newData = new DOHDataDrop({
                    case_code,
                    age,
                    age_group,
                    sex,
                    date_confirm,
                    date_expire,
                    date_recover,
                    removal_type,
                    date_rep_rem,
                    admitted,
                    region_res,
                    prov_res,
                    city_res,
                    mun_res,
                    health_status,
                    is_quarantined,
                    date_on_set,
                    region_psgc,
                    prov_psgc,
                    location,
                    loc_lat,
                    loc_long,
                    island_group
                })
                DOHDataDrop.create(newData)
                .then(cases => {
                    console.log("Saving " + cases)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    })

}

exports.covid_summary = (req, res) => {
    getCasesSummaryDB()
    .then(res.status(200).json({result : "Processing the data"}))
    .catch(err => {
        console.log("Error: " + err)
    })
    
}

exports.covid_doh_data_drop = (req, res) => {
    getDOHDataDrop()
    .then(res.status(200).json({result: "Processing the data"})

    )
    .catch(err => {
        console.log("Error: " + err)
    })
    
}