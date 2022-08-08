const trim = function(){
    let name = "   shishir sharma    "
    name = name.trim()
    console.log(name)
}

const changeToUpperCase = function() {
    let upperCaseString = "shishir sharma"
    upperCaseString = upperCaseString.toUpperCase()
    console.log(upperCaseString)
}

const changetoLowerCase = function() {
    let lowerCaseString = "SHISHIR SHARMA"
    lowerCaseString = lowerCaseString.toLowerCase()
    console.log(lowerCaseString)
}

module.exports.trimMyString = trim
module.exports.getUpperCaseString = changeToUpperCase
module.exports.changetoLowerCase = changetoLowerCase