const express =  require("express");
const expressEdge= require("express-edge");
const router = express.Router();
const bodyParser = require("body-parser");


const UserController = require("../controllers/user");

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({extended:true}));

router.use(expressEdge);



router.post('/api/v1/auth/signin', UserController.userSignIn);

router.post('/api/v1/auth/signup',UserController.userSignUp)


module.exports = router;