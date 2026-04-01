const { users } = require("../data/store");
const jwt = require('jsonwebtoken');
const { SECRET_Key } = require("../config");

//SIGN UP
const signup = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = users.find(item => item.username === username);
    if(userExist){
        res.status(409).send("User Already Exist!");
        return;
    }
    users.push({
        username, 
        password
    })
    res.send("You've Signed Up Successfully");
}

// SIGN IN
const signin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = users.find(user => user.username === username && user.password === password);

    if(!userExist){
        res.status(401).send("Unauthorized");
        return
    }
    const token = jwt.sign({
        username
    },SECRET_Key)

    res.json({
        token
    })
}

module.exports = { signup, signin };