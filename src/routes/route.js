const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.post("/createauthor", BookController.createauthor )
router.post("/createbook", BookController.createbook)
router.get ("/getbookaur",BookController.getbookauthor)
router.get ("/getpricerange",BookController.getprice)

module.exports = router;