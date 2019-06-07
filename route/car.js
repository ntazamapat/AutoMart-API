const express =  require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const CarsController = require("../controllers/car")





router.use(bodyParser.json());

router.use(bodyParser.urlencoded({extended:true}));

router.post('/api/v1/car',CarsController.postanAd)


router.get('/api/v1/car/',CarsController.getAllCars )

module.exports = router;