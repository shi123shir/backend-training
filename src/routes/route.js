const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weathercontroller = require("../controllers/weathercontroller")
const memecontroller= require("../controllers/memecontroller")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getBydistrict",CowinController.getByDistricts)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/weather",weathercontroller.weather)
router.post("/meme",memecontroller.memeabc)


module.exports = router;