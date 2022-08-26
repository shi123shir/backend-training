const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId

const orderSchema= new mongoose.Schema({
    userId: {
        type:objectId,
        ref:"myuser"
    },
	productId:{
        type:objectId,
        ref:"myproduct"
    },
	amount:Number,
	isFreeAppUser: Boolean,
	date: {type:String,default:Date}
},   {timestamps:true})

module.exports= mongoose.model("myorder",orderSchema)
