const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getBooksData)

router.get ("/booksdata", BookController.bookList)
router.post( "/getbookbyyear",BookController.bookyear)
router.post ("/particular",BookController.particularBooks)
router.get ("/pricedetail",BookController.priceDetails)
router.get ( "/getrandombook",BookController.randomBooks)

// router.post("/createUser", UserController.createUser  )


router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)
module.exports = router;