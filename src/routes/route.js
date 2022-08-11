const express = require('express');
const _ = require('underscore')
const lodash = require('lodash')

const abc = require('../introduction/intro')
const loggerModule = require('../logger/logger.js')
const formatterModule = require('../validator/formatter') 
const helperModule = require('../util/helper')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     // console.log('My batch is', abc.name)
//     // abc.printName()
//     loggerModule.welcome()
//     helperModule.printDate()
//     helperModule.getCurrentMonth()
//     helperModule.printBatchDetails()
//     formatterModule.trimMyString()
//     formatterModule.getUpperCaseString()
//     formatterModule.changetoLowerCase()
//     let weekdend = ['Saturday','Sunday','Monday']
//     let result = _.first(weekdend, 2)
//     console.log('Unserscore example resultr is ',result)

//     // chunk function
//      let arr = ['January', 'February','March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November',  'December']
     
//          console.log (lodash.chunk( arr , 3))

//         //tail function
//     let odd = [1,3,5,7,9,11,13,15,17,19]
//      console.log (lodash.tail(odd))

//       //union function

//      let od = [ 1,2,3,2]
//      let hell = [ 2,3,4,3]
//      let go= [  3,4,5]
//      let me = [ 4, 5, 6]
//      let em = [ 5,4,2]
//      console.log (lodash.union(od,hell,go,me,em))

//      // frompairs function

//      let ed= [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"] ]
//      console.log (lodash.fromPairs(ed))

//     res.send('My second ever api!')

// });

// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })

// missing number problem 1

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
router.get("/sol1", function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    arr.forEach((array, index) => {
        total += array
     })

    let lastdigit = arr.pop()
    let consecutiveSum = lastdigit * (lastdigit + 1) / 2
    let missingNumber = consecutiveSum - total
    
      res.send({ data: missingNumber });
});

// missingno. problem 2

// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
 // Your route code will look like this

 router.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arra= [33, 34, 35, 37, 38]
  let len = arra.length

  let total2 = 0;
  arra.forEach((arrays, index) => {
      total2 += arrays
   })
   let firstDigit= arra[0]
   let lastDigit1= arra.pop()
   let consecutiveSum1= (len + 1) * (firstDigit+ lastDigit1 ) / 2
   let missingNumber2= consecutiveSum1 - total2

  

  res.send(  { data: missingNumber2  }  );
});
module.exports = router;
// adding this comment for no reason