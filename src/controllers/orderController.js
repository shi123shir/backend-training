
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
     let freeAppUser = req.headers.isfreeappuser
     if( freeAppUser == "false"){
    if (userid.balance >= data.amount ){
    let ordercreated = await OrderModel.create(data)
    let upd = await userModel.updateOne({_id:userid},
       {$inc:{balance: - data.amount}} )
       return res.send ({msg:ordercreated})
     }else if(userid.balance <= data.amount){
        return res.send ({status:false, msg:"user doesn't have enough money to purchase this product " })
     }
     }else if (freeAppUser === "true"){
            data["amount"]=0
            const ord = await OrderModel.create(data)
            return  res.send ({msg:ord})
     }

}
module.exports.createorder = createorder