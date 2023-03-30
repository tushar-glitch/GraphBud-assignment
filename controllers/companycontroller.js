const company_model = require("../models/company")

class userController {
    static post_company_details = async (req, res) => {
        const { name, location } = req.body
        if (name && location) {
            const companies = await company_model.find()
            const new_company = company_model({
                id: companies.length,
                name: name,
                location: location
            })
            await new_company.save()
            res.status(200).json({
                msg:"New company registered!"
            })
        }
        else {
            res.status(404).json({
                msg:"Please enter all the fields!"
            })
        }
    }
    static get_company_details = async (req, res) => {
        const companies = await company_model.find()
        res.status(200).json(companies)
    }
    static put_company_details = async (req, res) => {
        const { name, location } = req.body
        const id = req.params.id
        if (name && location) {
            const iscompany = await company_model.findOne({ id })
            if (iscompany) {
                Object.assign(iscompany, req.body)
                await iscompany.save()
                res.status(200).json({
                    msg:"Data updated successfully!"
                })
            }
            else {
                res.status(404).json({
                    msg:"No record found!"
                })
            }
        }
        else {
            res.status(404).json({
                msg: "Please fill all the details!"
            })
        }
    }
    static get_company_details_by_id = async (req, res) => {
        const id = req.params.id
        const companies = await company_model.findOne({ id })
        if(companies)
            res.status(200).json(companies)
        else {
            res.status(404).json({
                msg:"No record found!"
            })
        }
    }
}

module.exports = userController