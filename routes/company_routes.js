const express = require('express')
const companyController = require('../controllers/companycontroller')
const route = express.Router()

route.post('/',companyController.post_company_details)
route.get('/',companyController.get_company_details)
route.get('/:id',companyController.get_company_details_by_id)
route.put('/:id',companyController.put_company_details)

module.exports = route