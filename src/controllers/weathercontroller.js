let axios = require("axios")

let weather = async function(req, res){
  try{
   let cityarr = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
   let sortedcity=[]
   for(let i=0;i<cityarr.length;i++){
    let obj={city:cityarr[i]}
    let option = {
              method : "get",
              url : ` http://api.openweathermap.org/data/2.5/weather?q=${cityarr[i]}&appid=8c5ce1a147d233b224598168e02a1295`
    }
    let result = await axios(option)
    obj.temp =result.data.main.temp
    sortedcity.push(obj)
  }

     let sorted = sortedcity.sort((a,b) => a.temp-b.temp)
    res.status(200).send({data:sorted})
  } 
  catch(err){
          res.status(500).send({msg:"servererror",error:err})
  }
}

module.exports.weather=weather
