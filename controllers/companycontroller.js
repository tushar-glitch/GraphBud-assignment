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
        console.log(companies);
    }
    
}

module.exports = userController