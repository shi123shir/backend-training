const publisherModle= require("../models/publisherModel")

const publisher= async function(req,res){
    let pubbody= req.body
    let pubcreate= await publisherModle.create(pubbody)
    res.send({msg : pubcreate})
}






module.exports.publisher = publisher