const userModel = require("../models/userModel")

const middle = async function (req, res,next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if(!token){
      return res.send("can't find token")
    }
    next()
}
module.exports.middle = middle 