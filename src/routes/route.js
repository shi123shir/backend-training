const express = require('express');
const router = express.Router();
const middleware= require("../middlewares/commonMiddlewares")
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const orderController= require("../controllers/orderController")

router.post("/product",ProductController.createProduct)
router.post("/createUser",middleware.middle,middleware.middle2,UserController.createUser)
router.post("/order",middleware.middle,middleware.middle2,orderController.createorder)







module.exports = router;