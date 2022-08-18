
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/author")

const createauthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const createbook= async function (req, res) {
    let bookcreate= req.body
    let sendbook= await BookModel.create(bookcreate)
    res.send({msg: sendbook})
}
const getbookauthor= async function ( req, res ){
    let findauthor= await AuthorModel.find()
    let findbooks= await BookModel.find({author_id:1})
    let up= await BookModel.findOneAndUpdate(
        {author_id:1},
        {$set:{price:100}},
    )
    let findup= await BookModel.find( {authro_id : 1})
    res.send (findup)
}
 const getprice = async function(req, res ){
   let avc =  await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1}).map(x => x.author_id)
   const abc = await AuthorModel.find ({avc}).select({author_name:1,_id:0})
   res.send(abc)
 }



    


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createauthor= createauthor
module.exports.createbook = createbook
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.getbookauthor=getbookauthor
module.exports.getprice=getprice
