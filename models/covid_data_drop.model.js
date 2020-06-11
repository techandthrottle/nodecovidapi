const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dohdatadropschema = new Schema({
    case_code: {
        type: String,
        required: true
    },
    age: { type: Number},
    age_group: { type: String },
    sex: { type: String },
    date_confirm: { type: String },
    date_expire: { type: String },
    date_recover: { type: String },
    removal_type: { type: String },
    date_rep_rem: { type: String },
    admitted: { type: String},
    region_res: { type: String },
    prov_res: { type: String },
    city_res: { type: String },
    mun_res: { type: String},
    health_status: { type: String },
    is_quarantined: { type: String },
    date_on_set: { type: String },
    region_psgc: { type: String },
    prov_psgc: { type: String },
    location: { type: String },
    loc_lat: { type: Number },
    loc_long: { type: Number },
    island_group: { type: String }
})

const doh_data_drop = mongoose.model('doh_data_drop', dohdatadropschema)

module.exports = doh_data_drop