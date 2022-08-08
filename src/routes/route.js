const { json } = require('body-parser');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})
 //assignment 
 // assignment 1
 
 router.get('/GET/movies', function(req,res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies)
 })
// assignment 2 , 3
 router.get('/GET/movies/:indexNumber',function(req,res){
    let movieslist =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let abc = req.params.indexNumber 
    if ( abc > movieslist.length){
        return res.send( "movie not found invalid number ")
    }else{

    console.log (movieslist[abc] )
    res.send(movieslist[abc])
     }
 })

   // assignment 4
   router.get('/GET/films',function(req,res){
  let objlist=
    [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
     res.send (objlist)
     console.log (objlist)   
   })
    //assignment 5 
  router.get ('/GET/films/:filmId',function(req,res){
  let objectId=
  [ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]
   objectId.unshift(null)
   let cdm = req.params.filmId    
    if ( cdm >= objectId.length){
        return res.send ("movie not found")
    }
    else{

        res.send(objectId[cdm])

    }
   


  })




   


 



module.exports = router;