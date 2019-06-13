const express =  require("express");
const expressEdge= require("express-edge");
// Router nous permet d'exporter les endpoints vers index.js( example :app.get....)
// C'est pour mieux organiser notre  projet
const router = express.Router();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

//  connect to the folder of controllers to get all the (req,res ) functions

const CarsController = require("../controllers/car")

var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'dmgeldhs1', 
  api_key: 894563545515723, 
  api_secret: "Ep_yVemD18IJ5EnQmyjexND-iJk"
});






router.use(bodyParser.json());

router.use(bodyParser.urlencoded({extended:true}));

router.use(expressEdge);

router.use(methodOverride("_method"));



// Creating routes

router.get('/api/v1',CarsController.getHomepage);

router.get('/api/v1/car',CarsController.getAllCars);


router.post('/api/v1/car',upload.single('image'),CarsController.postanAd)

router.get('/api/v1/car/:id',CarsController.getCar);

router.get('/api/v1/car/:id/edit' ,CarsController.getIDforEdit)

router.get('/api/v1/car/:id/editPrice' ,CarsController.getIDforEditP)

router.patch('/api/v1/car/:id/status',CarsController.updateCarStatusId);

router.patch('/api/v1/car/:id/price',CarsController.updateCarIDPrice);

router.delete('/api/v1/car/:id',CarsController.deleteCar)


// Export the routes to the index main file
module.exports = router;