const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const  publisherModel= require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let authorid=book.author
    if ( !authorid ){
        return res.send ("autohor required")
    }
    let authoron= await authorModel.findById(authorid)
    if (!authoron){
    return res.send({status:false,msg:"author id not present in database"})
    }
    let pulisherid= book.publisher
    if (!pulisherid){
        return res.send({status:false,msg:"publisher required"})
    }
    let publishon= await publisherModel.findById(pulisherid)
    if(!publishon){
        return res.send ({status:false,msg:"publihserid is not in our database" })
    }
    let bookCreated = await bookModel.create(book)
    res.send(bookCreated)
    
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})
}



 const bookupdate= async function(req,res){
    let all = await bookModel.find({publisher:['62ffc039fb5ce84a68c5115b','63006806d85de296818920a1']}).updateMany(
        {isHardCover:false},
        {$set:{isHardCover:true}},
        {upsert:true}
    ) 
     let bookall=await authorModel.find({rating:{$gt: 3.5}})
            let bookup = await bookModel.find({author:['62ffc145fb5ce84a68c51163','62ffc1bdfb5ce84a68c51165','62ffc1e0fb5ce84a68c51167']}).updateMany(
            {price : 50},
        {$set:{price:60}}
     )
        res.send(bookup)
         }
     
 

 
 

module.exports.createBook= createBook
module.exports.bookupdate=bookupdate
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
