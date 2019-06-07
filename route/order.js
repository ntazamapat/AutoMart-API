const express =  require("express");
const expressEdge= require("express-edge");
const router = express.Router();
const bodyParser = require("body-parser");


const OrdersController = require("../controllers/order");


router.use(bodyParser.json());

router.use(bodyParser.urlencoded({extended:true}));

router.use(expressEdge);


router.post('/api/v1/order',OrdersController.purchaseOrder);




router.patch('/api/v1/order/:id/:price',OrdersController.updateOrder);





module.exports = router;