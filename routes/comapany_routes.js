const express = require('express')
const companyController = require('../controllers/companycontroller')
const route = express.Router()

route.post('/',companyController.post_company_details)

module.exports = route