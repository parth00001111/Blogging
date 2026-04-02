
const jwt = require('jsonwebtoken');
const { SECRET_Key } = require("../config");
const { userModel} = require("../models/models")
//SIGN UP
const signup = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userExist = await userModel.findOne({
        username: username
    })
  if(userExist){
    res.status(403).josn({
        message: "User with this name already exists"
    })
    return;
  }
  const newUser = await userModel.create({
    username:username,
    password:password
  })

   
    res.json({
        message:"you have signed up successfully",
        id:newUser._id
    })
}

// SIGN IN
const signin = async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userExist = userModel.findOne({
        username:username,
        password:password
    })
    if(!userExist){
        res.status(401).josn({
            message:"You are not authorized"
        })
    }
    const token = jwt.sign({
        userId:userExist._id
    }, SECRET_Key)
    res.json({
        token
    })

}
   

module.exports = { signup, signin };