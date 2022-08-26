
const OrderModel= require("../models/Order")
const userModel= require("../models/userModel")
const ProductModel= require("../models/product")



const createorder= async function (req, res ){
    let data = req.body
    let set = data.userId
    let userid = await userModel.findById(set)
    if(!userid){
        return res.send ({status:false, msg:"user is not in our database"})
    }
    let pro= data.productId
    let productid = await ProductModel.findById(pro)
    if(!productid){
        return res.send ({status:false, msg:"product is not in our database"})
    }
    let abc= await OrderModel.create(data)
    res.send({msg: abc})
}

module.exports.createorder = createorder