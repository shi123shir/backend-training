const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// <<-----------------------------------------------------CreateUser----------------------------------------------------------------------->
const createUser = async function (abcd, xyz) {
  try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.status(201).send({ msg: savedData });
  }catch(err){
    res.status(500).send({msg:"server error",error:err})
  }
};
// <<------------------------------------------------------userloging----------------------------------------------------------------------->
const loginUser = async function (req, res) {
  try {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({ status: false,  msg: "username or the password is not corerct", });
  // token creation
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });
  }catch(err){
    res.status(500).send({msg:"server error",error:err})
  }
};
// <<------------------------------------------------------getUserdata----------------------------------------------------------------------->
const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }catch(err){
    res.status(500).send({msg:"server error" ,error:err})
  }
};
// <<------------------------------------------------------updateuser----------------------------------------------------------------------->
const updateUser = async function (req, res) {
 try {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: true, data: updatedUser });
}catch(err){
      res.status(500).send({msg:"server error",error:err})
}
};
// <<------------------------------------------------------isdelseted api----------------------------------------------------------------------->
const isdelete = async function (req, res) {
  try{
  let userId = req.params.userId
  if (!userId) {
    res.status(404).send({ msg: "userid not found" })
  }
  let findid = await userModel.findByIdAndUpdate({ _id: userId }, { isdeleted: true }, { new: true })
  res.status(200).send({ data: findid })
}catch(err){
  res.status(500).send({msg:"server error",error:err})
}
}



// const postMessage = async function (req, res) {
//     let message = req.body.message
//     // Check if the token is present
//     // Check if the token present is a valid token
//     // Return a different error message in both these cases
//     let token = req.headers["x-auth-token"]
//     if(!token) return res.send({status: false, msg: "token must be present in the request header"})
//     let decodedToken = jwt.verify(token, 'functionup-thorium')

//     if(!decodedToken) return res.send({status: false, msg:"token is not valid"})

//     //userId for which the request is made. In this case message to be posted.
//     let userToBeModified = req.params.userId
//     //userId for the logged-in user
//     let userLoggedIn = decodedToken.userId

//     //userId comparision to check if the logged-in user is requesting for their own data
//     if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

//     let user = await userModel.findById(req.params.userId)
//     if(!user) return res.send({status: false, msg: 'No such user exists'})

//     let updatedPosts = user.posts
//     //add the message to user's posts
//     updatedPosts.push(message)
//     let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

//     //return the updated user document
//     return res.send({status: true, data: updatedUser})
// }

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.isdelete = isdelete
