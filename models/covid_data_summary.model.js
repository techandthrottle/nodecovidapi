const mongoose = require('mongoose')

const Schema = mongoose.Schema

const historicalDataSchema = new Schema({

    date_recorded: { type: Date },
    total_cases: { type: Number },
    death_count: { type: Number },
    recovery_count: { type: Number },
    daily_test_conducted: { type: Number },
    total_test_conducted: { type: Number },
    daily_case_recorded: { type: Number },
    daily_death_recorded: { type: Number },
    daily_recovery_recorded: { type: Number },
    admitted : { type: Number}     
})

const historical_data = mongoose.model('historical_data', historicalDataSchema)

module.exports = historical_data
