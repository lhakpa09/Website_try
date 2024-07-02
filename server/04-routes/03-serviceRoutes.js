const Express = require('express')
const router = Express.Router()

const { CreateService } = require("../05-controllers/03-servicesController")
const {serviceImageUpload} =require("../03-middleware/imageUpload")
const { GetServices } = require('../05-controllers/03-servicesController')


router.post("/create-service",serviceImageUpload,CreateService)
router.get('/get-services', GetServices)

module.exports = router