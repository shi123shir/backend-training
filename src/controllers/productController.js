
const ProductModel = require("../models/product")

const createProduct= async function(req, res){
    let data = req.body
    let product= await ProductModel.create(data)
    res.send({data:product})
}

module.exports.createProduct = createProduct


