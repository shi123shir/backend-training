const express = require('express');
const _ = require('underscore')
const lodash = require('lodash')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()
    loggerModule.welcome()
    helperModule.printDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    formatterModule.trimMyString()
    formatterModule.getUpperCaseString()
    formatterModule.changetoLowerCase()
    let weekdend = ['Saturday','Sunday','Monday']
    let result = _.first(weekdend, 2)
    console.log('Unserscore example resultr is ',result)

    // chunk function
     let arr = ['January', 'February','March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November',  'December']
     
         console.log (lodash.chunk( arr , 3))

        //tail function
    let odd = [1,3,5,7,9,11,13,15,17,19]
     console.log (lodash.tail(odd))

      //union function

     let od = [ 1,2,3,2]
     let hell = [ 2,3,4,3]
     let go= [  3,4,5]
     let me = [ 4, 5, 6]
     let em = [ 5,4,2]
     console.log (lodash.union(od,hell,go,me,em))

     // frompairs function

     let ed= [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
     console.log (lodash.fromPairs(ed))

    res.send('My second ever api!')

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason