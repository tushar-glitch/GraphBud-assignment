const mongoose = require('mongoose')

const company_schema = new mongoose.Schema({
    id: {
        type:String
    },
    name: {
        type:String
    },
    location: {
        type:String
    }
})
const company_model = mongoose.model('Graphbud', company_schema)
module.exports = company_model;